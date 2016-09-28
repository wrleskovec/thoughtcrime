import moment from 'moment';
import BL from './blockList.js';
import wurl from 'wurl';

export default class Timer {
  constructor() {
    this.currentSite = null;
    this.windowFocus = true;
    this.counter = 0;
    this.dbCounter = 0;
    this.intervalId = null;
    this.currentDate = moment().format('DD-MM-YYYY');
    this.dailyRecord = null;
  }
  init() {
  // retrieving daily record cache
    BL.fetchDaily(this.currentDate)
      .then(today => {
        this.dailyRecord = today || {};
      });
      // checking if window is unfocused
    chrome.windows.onFocusChanged.addListener(() => {
      if (chrome.windows.WINDOW_ID_NONE) {
        this.windowFocus = false;
        this.addCounter();
        this.currentSite = null;
        this.stopInterval();
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
          this.addCounter();
          this.currentSite = wurl('domain', tab.url);
          console.log('DIFF SITE');
          this.startInterval();
        }
      });
    });
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (!tab.url) {
        console.log('Not a valid url');
      } else {
        this.currentSite = wurl('domain', tab.url);
        console.log(this.currentSite);
        this.startInterval();
      }
    });
  }

  addCounter() {
    if (this.counter > 0) {
      if (this.dailyRecord[this.currentSite]) {
        this.dailyRecord[this.currentSite].timeSpent += this.counter;
      } else {
        this.dailyRecord[this.currentSite] = { timeSpent: this.counter, visits: 1 };
      }
      this.counter = 0;
    }
  }
  stopInterval() {
    clearInterval(this.intervalId);
  }
  startInterval() {
    this.counter = 0;
    if (!(this.intervalId === null)) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.counter = this.counter += 1;
      console.log(moment().second(this.counter).format('HH : mm : ss'));
    }, 1000);
  }
}
