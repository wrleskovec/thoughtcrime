import moment from 'moment';
import 'moment-duration-format';
import wurl from 'wurl';
import _ from 'lodash';
import BL from './blockList.js';


const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

class Filter {
  constructor() {
    this.currentSite = null;
    this.currentTab = null;
    this.popup = false;
    this.startTime = null;
    this.newDayTimer = this.setNewDayTimer();
    this.limitCD = undefined;
    // Need to bind since I'm calling it externally
    this.webRequestHandler = this.webRequestHandler.bind(this);
  }
  init() {
    chrome.windows.getAll({ populate: true }, (windows) => {
      windows.forEach((win) => {
        win.tabs.forEach((tab) => {
          if (this.isValidProtocol(tab.url)) {
            chrome.tabs.executeScript(tab.id, { file: 'content.js' });
          }
        });
      });
    });
    // interacting with popup for timer & content.js
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.focus) {
        const senderSite = wurl('domain', sender.tab.url);
        if (request.focus === 'focus' && this.currentSite && senderSite !== this.currentSite.site
         && sender.tab.id !== this.currentTab && this.isValidProtocol(senderSite)) {
          this.popup = false;
          if (this.currentSite !== null) {
            this.saveRecords();
          }
          BL.getRecord(senderSite)
            .then((record) => {
              this.currentTab = sender.tab.id;
              this.currentSite = record;
              this.startTime = moment();
              clearTimeout(this.limitCD);
              this.handleAction(this.currentSite.action, this.currentTab);
            });
        } else if (request.focus === 'blur') {
          console.log('BLUUUUUUUUUURRRRR');
          if (sender.tab.id === this.currentTab && senderSite && !this.popup) {
            this.saveRecords();
            this.startTime = null;
            this.currentSite = null;
            this.currentTab = null;
          }
        }
      }
      if (request.timer === 'popup') {
        this.popup = true;
        sendResponse({ seconds: this.getDuration(moment()) });
      }
    });
    // chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //   const tabSite = wurl('domain', tab.url);
    //   console.log(`currentSite: ${this.currentSite}, tab: ${tabSite}`);
    //   const validUrl = tabSite !== this.currentSite && this.isValidProtocol(tab.url);
    //   if (validUrl) {
    //     this.currentSite = tabSite;
    //     this.currentTab = tab.id;
    //   }
    // });

    chrome.webRequest.onBeforeRequest.addListener(_.debounce(this.webRequestHandler, 50), {
      urls: ['<all_urls>'],
      types: ['main_frame']
    });
  }
  setNewDayTimer() {
    const tomorrow = moment().add(1, 'days').startOf('day');
    return setTimeout(() => {
      this.saveRecords()
        .then(() => BL.initNewDate());
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
    const timeElapsed = this.getDuration(moment());
    return BL.reconcileRecords(this.currentSite.site, timeElapsed, 1)
      .then(() =>
        BL.getSchedule()
          .then((schedule) => {
            schedule.setting.currentTime = schedule.setting.currentTime - timeElapsed;
            return BL.saveChangesSchedule(schedule);
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
  handleAction(action, tabId) {
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
            }
            break;
          }
          case 'Accept All':
            break;
          default: {
            if (action === 'block') {
              this.loadFilteredPage(tabId, BLOCKED_PAGE);
            } else if (action === 'limit') {
              this.setLimitCD(tabId, schedule);
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
      }, moment.duration('seconds', currentTime));
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
    this.urlCheck(details.url, details.tabId);
    return {};
  }
  urlCheck(url, tabId) {
    const protocol = wurl('protocol', url);
    if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
      const site = wurl('domain', url);
      BL.getRecord(site)
        .then(record => {
          this.currentSite = record;
          console.log(self);
          const aclMatch = record.advAction.find(action => {
            const reg = new RegExp(action.regex, 'i');
            return reg.test(url);
          });
          if (aclMatch) {
            this.handleAction(aclMatch.action, tabId);
          } else {
            this.matchPatterns(url)
              .then(patternMatch => {
                if (patternMatch) {
                  this.handleAction(patternMatch.action, tabId);
                } else {
                  this.handleAction(record.action, tabId);
                }
              });
          }
        })
        .catch(() => {
          this.matchPatterns(url)
            .then(patternMatch => {
              if (patternMatch) this.handleAction(patternMatch.action, tabId);
            });
        });
    }
  }
}

export default new Filter();
