import moment from 'moment';
import 'moment-duration-format';
import BL from './blockList.js';
import wurl from 'wurl';

class Timer {
  constructor() {
    this.currentSite = null;
    this.currentTab = null;
    this.popup = false;
    this.startTime = null;
    this.newDayTimer = this.setNewDayTimer();
    this.dailyLimit = undefined;
    this.limitCD = undefined;
  }
  init() {
    // loading content.js on all previously opened windows (maybe just ask user to restart?)
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
        if (request.focus === 'focus' && senderSite !== this.currentSite && senderSite
         && sender.tab.id !== this.currentTab && this.isValidProtocol(senderSite)) {
          this.popup = false;
          if (this.currentSite !== null) {
            this.saveRecords();
          }
          this.currentTab = sender.tab.id;
          this.currentSite = senderSite;
          this.startTime = moment();
        } else if (request.focus === 'blur') {
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
        sendResponse({ seconds: this.getDuration() });
      }
    });
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      const tabSite = wurl('domain', tab.url);
      console.log(`currentSite: ${this.currentSite}, tab: ${tabSite}`);
      const validUrl = tabSite !== this.currentSite && this.isValidProtocol(tab.url);
      if (validUrl) {
        this.currentSite = tabSite;
        this.currentTab = tab.id;
      }
    });
  }
  setLimitCD() {

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
}

export default new Timer();
