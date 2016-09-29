import moment from 'moment';
import BL from './blockList.js';
import wurl from 'wurl';

export default class Timer {
  constructor() {
    this.currentSite = null;
    this.windowFocus = true;
    this.counter = 1;
    this.dbCounter = 1;
    this.intervalId = null;
    this.currentDate = moment().format('DD-MM-YYYY');
  }
  init() {
      // checking if window is unfocused
    chrome.windows.onFocusChanged.addListener(() => {
      if (chrome.windows.WINDOW_ID_NONE) {
        this.windowFocus = false;
        if (this.currentSite !== null) {
          this.stopInterval();
          BL.reconcileRecords(this.currentSite, this.counter);
        }
        this.currentSite = null;
      } else {
        this.windowFocus = true;
      }
    });
    // checking if window closed
    chrome.windows.onRemoved.addListener(() => {
      //
    });
    chrome.tabs.onActivated.addListener(activeInfo => {
      chrome.tabs.get(activeInfo.tabId, tab => {
        const protocol = wurl('protocol', tab.url);
        if (protocol === 'chrome' || protocol === 'chrome-extension') {
          console.log('NOICE');
        } else if (wurl('domain', tab.url) === this.currentSite) {
          console.log('SAME SITE');
        } else {
          if (this.currentSite !== null) {
            this.stopInterval();
            BL.reconcileRecords(this.currentSite, this.counter);
          }
          console.log('DIFF SITE');
          this.currentSite = wurl('domain', tab.url);
          this.startInterval();
        }
      });
    });
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (!tab.url) {
        console.log('Not a valid url');
      } else {
        const tabSite = wurl('domain', tab.url);
        if (tabSite !== this.currentSite && tabSite !== undefined) {
          this.currentSite = tabSite;
          console.log(this.currentSite);
          this.startInterval();
        }
      }
    });
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }
  startInterval() {
    this.counter = 1;
    this.dbCounter = 1;
    if (!(this.intervalId === null)) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.counter = this.counter += 1;
      this.dbCounter = this.dbCounter += 1;
      console.log(moment().second(this.counter).format('HH : mm : ss'));
    }, 1000);
  }
}
