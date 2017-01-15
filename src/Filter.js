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
    this.popup = false;
    this.startTime = null;
    this.newDayTimer = this.setNewDayTimer();
    this.limitCD = undefined;
    // This is to deal with blur async weirdness
    this.queue = new PQueue({ concurrency: 1 });

    // Need to bind since I'm calling it externally
    this.webRequestHandler = this.webRequestHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
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

    chrome.webRequest.onBeforeRequest.addListener(_.debounce(this.webRequestHandler, 50), {
      urls: ['<all_urls>'],
      types: ['main_frame']
    });
  }
  messageHandler(request, sender, sendResponse) {
    if (request.focus && this.isValidProtocol(sender.tab.url)) {
      const senderSite = wurl('domain', sender.tab.url);
      if (request.focus === 'focus' && senderSite) {
        if (!this.currentSite) {
          this.addToQueue(this.urlCheck(sender.tab.url, sender.tab.id));
        } else {
          if (this.notDuplicateTabOrDomain(senderSite, sender.tab.id)) {
            this.addToQueue(this.saveRecords()
              .then(() => this.urlCheck(sender.tab.url, sender.tab.id))
            );
          } else {
            this.currentTab = sender.tab.id;
          }
        }
      } else if (request.focus === 'blur') {
        console.log('BLUUUUUUUUUURRRRR');
        console.log(`blurTab: ${sender.tab.id} tab: ${this.currentTab} ${senderSite} `);
        if (senderSite) {
          this.addToQueue(this.saveRecords().then(() => {
            this.startTime = null;
            this.currentSite = null;
            this.currentTab = null;
          }));
        }
      }
    }
    if (request.timer === 'popup') {
      this.popup = true;
      console.log(request);
      if (this.limitCD) {
        BL.getSchedule()
          .then((schedule) => {
            const response = {
              seconds: this.getDuration(moment()),
              currentLimit: schedule.setting.currentTime,
            };
            console.log(response);
            sendResponse(response);
          });
        return true;
      }
      sendResponse({
        seconds: Math.floor(this.getDuration(moment())),
        currentLimit: undefined
      });
    }
    return false;
  }
  addToQueue(p) {
    this.queue.add(() => p.then(() => { console.log('Promise added to queue'); }));
  }
  notDuplicateTabOrDomain(domain, tabId) {
    return this.currentSite !== domain && this.currentTab !== tabId;
  }
  handleNewDomainFocus() {
    this.startTime = moment();
    clearTimeout(this.limitCD);
    this.limitCD = undefined;
  }
  setNewDayTimer() {
    const tomorrow = moment().add(1, 'days').startOf('day');
    return setTimeout(() => {
      this.saveRecords()
        .then(() => BL.addDayRecord(moment().format('DD-MM-YYYY')))
        .then(() => BL.getSchedule())
        .then((schedule) => {
          console.log('resetting schedule');
          schedule.setting.currentTime = schedule.setting.dailyLimit * 60;
          return BL.saveChangesSchedule(schedule);
        });
    }, tomorrow.diff(moment()));
  }
  isValidProtocol(url) {
    const protocol = wurl('protocol', url);
    return (
      protocol === 'http' || protocol === 'https' || protocol === 'ftp'
    );
  }
  getDuration(now) {
    return moment.duration(now.diff(this.startTime)).asSeconds();
  }
  saveRecords() {
    console.log('saveRecords called: something must be working');
    const timeElapsed = this.getDuration(moment());
    return BL.reconcileRecords(this.currentSite, timeElapsed, 1)
      .then(() => BL.getSchedule()
          .then((schedule) => {
            if (this.limitCD) {
              schedule.setting.currentTime = schedule.setting.currentTime - timeElapsed;
              return BL.saveChangesSchedule(schedule);
            }
            return schedule;
          })
      );
  }

  loadFilteredPage(tabId, url) {
    setTimeout(() => {
      chrome.tabs.update(tabId, { url });
    }, 500);
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
    console.log(currentTime);
    if (currentTime > 0) {
      this.limitCD = setTimeout(() => {
        this.loadFilteredPage(tabId, BLOCKED_PAGE);
      }, Math.round(currentTime * 1000));
    } else {
      this.loadFilteredPage(tabId, BLOCKED_PAGE);
    }
  }
  matchPatterns(url) {
    return BL.getRegexPatterns()
      .then(patterns => {
        if (patterns !== undefined && patterns.items.length > 0) {
          return patterns.items.find(action => {
            const reg = new RegExp(action.regex, 'i');
            return reg.test(url);
          });
        }
        return undefined;
      });
  }

  webRequestHandler(details) {
    if (this.isValidProtocol(details.url)) {
      this.addToQueue(this.urlCheck(details.url, details.tabId));
    }
    return {};
  }
  urlCheck(url, tabId) {
    console.log(url);
    const site = wurl('domain', url);
    this.currentSite = site;
    this.currentTab = tabId;
    console.log('urlCheck() runs');
    return BL.getRecord(site)
      .then(record => {
        const aclMatch = record.advAction.find(action => {
          const reg = new RegExp(action.regex, 'i');
          const result = reg.test(url);
          return result;
        });
        if (aclMatch) {
          return this.handleAction(site, aclMatch.action, tabId);
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
}

export default new Filter();
