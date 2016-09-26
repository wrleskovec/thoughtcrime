import moment from 'moment';
import BlockList from './blockList.js';
import wurl from 'wurl';

export default class Timer {
  constructor() {
    this.currentSite = null;
    this.windowFocus = true;
    this.counter = 0;
    this.intervalId = null;
  }
// start timer with webRequest details object
  init() {
    chrome.windows.onFocusChanged.addListener(() => {
      if (chrome.windows.WINDOW_ID_NONE) {
        this.windowFocus = false;
        console.log('OUT_OF_WINDOW_EXPERIENCE');
      } else {
        this.windowFocus = true;
      }
    });
    chrome.tabs.onActivated.addListener(activeInfo => {
      chrome.tabs.get(activeInfo.tabId, tab => {
        if (tab === undefined) console.log('NOICE');
        else if (wurl('domain', tab.url) === this.currentSite) {
          console.log('SAME SITE');
        } else {
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
  startInterval() {
    this.counter = 0;
    if (!(this.intervalId === null)) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.counter = this.counter += 1;
      console.log(moment().hour(0).minute(0).second(this.counter).format('HH : mm : ss'));
    }, 1000);
  }
}
