import moment from 'moment';
import 'moment-duration-format';
import wurl from 'wurl';
import PQueue from 'p-queue';
import _ from 'lodash';
import BL from './blockList.js';

// This is possibly some of the worst code I have ever written and I really need better paradigm
// for complicated concurrentcy

const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

class Filter {
  constructor() {
    this.currentSite = null;
    this.currentTab = null;
    this.startTime = null;
    this.newDayTimer = this.setNewDayTimer();
    this.limitCD = undefined;
    // This is to deal with blur async weirdness
    this.queue = new PQueue({ concurrency: 1 });

    // Need to bind since I'm calling it externally
    this.webRequestHandler = this.webRequestHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
    // sometimes the webRequest stacking goes beyond 50ms but it still gets resolved as expected
    this.urlCheck = _.debounce(this.urlCheck.bind(this), 50, { maxWait: 100 });
  }
  init() {
    // chrome.windows.getAll({ populate: true }, (windows) => {
    //   windows.forEach((win) => {
    //     win.tabs.forEach((tab) => {
    //       if (this.isValidProtocol(tab.url)) {
    //         chrome.tabs.executeScript(tab.id, { file: 'content.js' });
    //       }
    //     });
    //   });
    // });
    // interacting with popup for timer & content.js
    chrome.runtime.onMessage.addListener(this.messageHandler);

    chrome.webRequest.onBeforeRequest.addListener(this.webRequestHandler, {
      urls: ['<all_urls>'],
      types: ['main_frame']
    });
    chrome.tabs.onRemoved.addListener(() => this.handleBlur());
  }
  messageHandler(request, sender, sendResponse) {
    if (request.focus && this.isValidProtocol(sender.tab.url)) {
      if (request.focus === 'focus') {
        this.urlCheck(sender.tab.url, sender.tab.id);
      } else if (request.focus === 'blur') {
        const senderSite = wurl('domain', sender.tab.url);
        console.log(`Blur: ${sender.tab.id} ${senderSite} current: ${this.currentTab}
         ${this.currentSite} `);
        if (senderSite && this.currentSite === senderSite) {
          this.handleBlur();
        }
      }
    }
    if (request.timer === 'popup') {
      if (this.limitCD) {
        BL.getSchedule()
          .then((schedule) => {
            const response = {
              seconds: Math.round(this.getDuration(moment()) / 1000),
              currentLimit: Math.round(schedule.setting.currentTime / 1000),
            };
            sendResponse(response);
          });
        return true;
      }
      const response = {
        seconds: Math.round(this.getDuration(moment()) / 1000),
        currentLimit: undefined,
      };
      sendResponse(response);
    }
    return false;
  }
  // using oop style was a mistake for catching race conditions on this.currentSite property
  handleBlur() {
    if (this.currentSite) {
      chrome.tabs.query({ active: true }, (tabs) => {
        this.queue.add(() => {
          if (!tabs || !this.isValidProtocol(tabs[0].url) &&
          !this.isPopup(tabs[0].url) && this.currentSite) {
            return this.saveRecords()
              .then(() => {
                this.startTime = null;
                this.currentSite = null;
                this.currentTab = null;
              });
          }
          return Promise.resolve();
        });
      });
    }
  }
  handleNewDomainFocus() {
    this.startTime = moment();
    clearTimeout(this.limitCD);
    this.limitCD = undefined;
  }
  setNewDayTimer() {
    const tomorrow = moment().add(1, 'days').startOf('day');
    return setTimeout(() => {
      if (this.currentSite) {
        this.saveRecords()
          .then(() => BL.dayChange(moment().format('DD-MM-YYYY')));
      } else {
        BL.dayChange(moment().format('DD-MM-YYYY'));
      }
    }, tomorrow.diff(moment()));
  }
  isValidProtocol(url) {
    const protocol = wurl('protocol', url);
    return (
      protocol === 'http' || protocol === 'https' || protocol === 'ftp'
    );
  }
  isPopup(url) {
    const regex = new RegExp('chrome-extension:\\/\\/\\w+\\/popup.html');
    return regex.test(url);
  }
  getDuration(now) {
    return moment.duration(now.diff(this.startTime));
  }
  saveRecords() {
    if (this.currentSite) {
      const timeElapsed = this.getDuration(moment());
      const seconds = Math.round(timeElapsed / 1000);
      return BL.reconcileRecords(this.currentSite, seconds, 1)
        .then(() => {
          if (this.limitCD) {
            return BL.getSchedule()
              .then((schedule) => {
                schedule.setting.currentTime = schedule.setting.currentTime - timeElapsed;
                return BL.saveChangesSchedule(schedule);
              });
          }
          return Promise.resolve();
        })
        .then(() => this.handleNewDomainFocus());
    }
    return Promise.resolve().then(() => this.handleNewDomainFocus());
  }

  loadFilteredPage(tabId, url) {
    chrome.tabs.update(tabId, { url });
  }
  getScheduleEvent(now, schedule) {
    const dayOfWeek = now.day();
    // moment.js starts with sunday as first day of week
    const convertedDay = (dayOfWeek === 6) ? 0 : dayOfWeek + 1;
    const currentHour = now.get('hour');
    const currentMinute = now.get('minute');
    const currentQuarter = currentHour * 4 + Math.ceil(currentMinute / 15);
    return schedule.items[convertedDay][currentQuarter].event;
  }
  handleAction(site, action, tabId) {
    return BL.getSchedule()
      .then((schedule) => {
        const now = moment();
        const event = this.getScheduleEvent(now, schedule);
        switch (event) {
          case 'Block All': {
            if (action === 'block') {
              this.loadFilteredPage(tabId, BLOCKED_PAGE);
            } else if (action === 'limit') {
              this.loadFilteredPage(tabId, BLOCKED_PAGE);
            } else {
              this.handleNewDomainFocus();
            }
            break;
          }
          case 'Accept All':
            this.handleNewDomainFocus();
            break;
          default: {
            if (action === 'block') {
              this.loadFilteredPage(tabId, BLOCKED_PAGE);
            } else if (action === 'limit') {
              this.handleNewDomainFocus();
              this.setLimitCD(tabId, schedule);
            } else {
              this.handleNewDomainFocus();
            }
            break;
          }
        }
      });
  }
  setLimitCD(tabId, schedule) {
    const currentTime = schedule.setting.currentTime;
    if (currentTime > 0) {
      this.limitCD = setTimeout(() => {
        this.loadFilteredPage(tabId, BLOCKED_PAGE);
      }, currentTime);
    } else {
      this.loadFilteredPage(tabId, BLOCKED_PAGE);
    }
  }
  matchPatterns(url) {
    return BL.getRegexPatterns()
      .then(patterns => {
        if (patterns !== undefined && patterns.items.length > 0) {
          return patterns.items.find(action => {
            const reg = new RegExp(_.escapeRegExp(action.regex), 'i');
            return reg.test(url);
          });
        }
        return Promise.resolve();
      });
  }

  webRequestHandler(details) {
    this.urlCheck(details.url, details.tabId);
    return {};
  }
  urlMatch(site, url, tabId) {
    this.currentTab = tabId;
    this.currentSite = site;
    return BL.getRecord(site)
      .then(record => {
        const aclMatch = record.advAction.find(action => {
          const reg = new RegExp(_.escapeRegExp(action.regex), 'i');
          const result = reg.test(url);
          return result;
        });
        if (aclMatch) {
          return this.handleAction(site, aclMatch.action, tabId);
        }
        if (record.action === 'block') {
          return this.handleAction(site, record.action, tabId);
        }
        return this.matchPatterns(url)
          .then(patternMatch => {
            if (patternMatch) {
              return this.handleAction(site, patternMatch.action, tabId);
            }
            return this.handleAction(site, record.action, tabId);
          });
      })
      .catch(() => this.matchPatterns(url)
        .then(patternMatch => {
          if (patternMatch) {
            return this.handleAction(site, patternMatch.action, tabId);
          }
          return this.handleNewDomainFocus();
        }));
  }
  urlCheck(url, tabId) {
    const site = wurl('domain', url);
    if (this.isValidProtocol(url)) {
      if (this.currentSite && this.currentSite !== site) {
        this.queue.add(() => this.saveRecords()
          .then(() => this.urlMatch(site, url, tabId)));
      }
      this.queue.add(() => this.urlMatch(site, url, tabId));
    }
  }
}

export default new Filter();
