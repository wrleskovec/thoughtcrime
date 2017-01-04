import moment from 'moment';
import 'moment-duration-format';
import BL from './blockList.js';
import wurl from 'wurl';

const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

class Filter {
  constructor() {
    this.currentSite = null;
    this.currentTab = null;
    this.popup = false;
    this.startTime = null;
    this.newDayTimer = this.setNewDayTimer();
    this.dailyLimit = undefined;
    this.limitCD = undefined;
    this.onLimit = false;
    this.urlCheck = this.urlCheck.bind(this);
  }
  init() {
    // loading content.js on all previously opened windows (maybe just ask user to restart?)
    // chrome.windows.getAll({ populate: true }, (windows) => {
    //   windows.forEach((win) => {
    //     win.tabs.forEach((tab) => {
    //       if (this.isValidProtocol(tab.url)) {
    //         chrome.tabs.executeScript(tab.id, { file: 'content.js' });
    //       }
    //     });
    //   });
    // });
    BL.getSchedule()
      .then(schedule => {
        this.dailyLimit = schedule.setting.dailyLimit;
      });
    // interacting with popup for timer & content.js
    // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //   if (request.focus) {
    //     const senderSite = wurl('domain', sender.tab.url);
    //     if (request.focus === 'focus' && senderSite !== this.currentSite && senderSite
    //      && sender.tab.id !== this.currentTab && this.isValidProtocol(senderSite)) {
    //       this.popup = false;
    //       if (this.currentSite !== null) {
    //         this.saveRecords();
    //       }
    //       this.currentTab = sender.tab.id;
    //       this.currentSite = senderSite;
    //       this.startTime = moment();
    //     } else if (request.focus === 'blur') {
    //       console.log('BLUUUUUUUUUURRRRR');
    //       if (sender.tab.id === this.currentTab && senderSite && !this.popup) {
    //         this.saveRecords();
    //         this.startTime = null;
    //         this.currentSite = null;
    //         this.currentTab = null;
    //       }
    //     }
    //   }
    //   if (request.timer === 'popup') {
    //     this.popup = true;
    //     sendResponse({ seconds: this.getDuration() });
    //   }
    // });
    // chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //   const tabSite = wurl('domain', tab.url);
    //   console.log(`currentSite: ${this.currentSite}, tab: ${tabSite}`);
    //   const validUrl = tabSite !== this.currentSite && this.isValidProtocol(tab.url);
    //   if (validUrl) {
    //     this.currentSite = tabSite;
    //     this.currentTab = tab.id;
    //   }
    // });
  }
  setLimitCD() {
    return setTimeout(() => {
      this.dailyLimit();
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
  getDuration() {
    return moment.duration(moment().diff(this.startTime)).asSeconds();
  }
  saveRecords() {
    return BL.reconcileRecords(this.currentSite, this.getDuration(), 1)
      .then(() => {
        this.startTime = moment();
      });
  }

  loadFilteredPage(tabId, url) {
    setTimeout(() => {
      chrome.tabs.update(tabId, { url });
    }, 500);
  }
  checkSchedule() {
    return BL.getSchedule()
      .then((schedule) => {
        const now = moment();
        const dayOfWeek = now.day();
        // moment.js starts with sunday as first day of week
        const convertedDay = (dayOfWeek === 6) ? 0 : dayOfWeek + 1;
        const currentHour = now.get('hour');
        const currentMinute = now.get('minute');
        const currentQuarter = currentHour * 4 + Math.ceil(currentMinute / 15);
        return schedule.items[convertedDay][currentQuarter].event;
      });
  }
  handleAction(action, details) {
    return this.checkSchedule()
      .then((event) => {
        switch (event) {
          case 'Block All': {
            if (action === 'block') {
              this.loadFilteredPage(details.tabId, BLOCKED_PAGE);
            } else if (action === 'limit') {
              this.loadFilteredPage(details.tabId, BLOCKED_PAGE);
            }
            break;
          }
          case 'Accept All':
            break;
          default: {
            if (action === 'block') {
              this.loadFilteredPage(details.tabId, BLOCKED_PAGE);
            } else if (action === 'limit') {
              this.loadFilteredPage(details.tabId, BLOCKED_PAGE);
            }
            break;
          }
        }
      });
  }
  matchPatterns(details) {
    return BL.getRegexPatterns()
      .then(patterns => {
        if (patterns !== undefined && patterns.items.length > 0) {
          return patterns.items.find(action => {
            const reg = new RegExp(action.regex, 'i');
            return reg.test(details.url);
          });
        }
        return undefined;
      });
  }


  urlCheck(details) {
    console.log('urlCheck Called:');
    console.log(details.url);
    console.log(details.tabId);
    const protocol = wurl('protocol', details.url);
    if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
      const site = wurl('domain', details.url);
      // I thought I would never have to mess with this context again. Holy shit. Remember timeout
      BL.getRecord(site)
        .then(record => {
          console.log(self);
          const aclMatch = record.advAction.find(action => {
            const reg = new RegExp(action.regex, 'i');
            return reg.test(details.url);
          });
          if (aclMatch) {
            this.handleAction(aclMatch.action, details);
          } else {
            console.log(this);
            this.matchPatterns(details)
              .then(patternMatch => {
                if (patternMatch) {
                  this.handleAction(patternMatch.action, details);
                } else {
                  this.handleAction(record.action, details);
                }
              });
          }
        })
        .catch(() => {
          this.matchPatterns(details)
            .then(patternMatch => {
              if (patternMatch) this.handleAction(patternMatch.action, details);
            });
        });
    }
    return {};
  }
}

export default new Filter();
