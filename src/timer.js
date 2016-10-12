import moment from 'moment';
import BL from './blockList.js';
import wurl from 'wurl';

export default class Timer {
  constructor() {
    this.currentSite = null;
    this.currentTab = null;
//    this.windowFocus = true;
    this.counter = 1;
    this.dbCounter = 1;
    this.intervalId = null;
    this.currentDate = moment().format('DD-MM-YYYY');
  }
  init() {
    // chrome.windows.onFocusChanged.addListener(() => {
    //   if (chrome.windows.WINDOW_ID_NONE) {
    //     this.windowFocus = false;
    //     if (this.currentSite !== null) {
    //       this.stopInterval();
    //       BL.reconcileRecords(this.currentSite, this.counter);
    //     }
    //     this.currentSite = null;
    //   } else {
    //     this.windowFocus = true;
    //     console.log('kill me google');
    //   }
    // });
    chrome.windows.getAll({ populate: true }, (windows) => {
      windows.forEach((win) => {
        win.tabs.forEach((tab) => {
          if (this.isValidProtocol(tab.url)) {
            chrome.tabs.executeScript(tab.id, { file: 'content.js' });
          }
        });
      });
    });
    chrome.runtime.onMessage.addListener((request, sender) => {
      const senderSite = wurl('domain', sender.tab.url);
      if (senderSite !== null) {
        if (request.focus === 'focus' && senderSite !== this.currentSite
         && sender.tab.id !== this.currentTab) {
          if (this.currentSite !== null) {
            this.saveRecords();
          }
          this.currentTab = sender.tab.id;
          this.currentSite = senderSite;
          this.startInterval();
        } else if (request.focus === 'blur' && sender.tab.id === this.currentTab) {
          this.saveRecords();
          this.currentSite = null;
          this.currentTab = null;
        }
      }
    });
  }
  //   chrome.windows.onRemoved.addListener(() => {
  //     //
  //   });
  //   chrome.tabs.onActivated.addListener(activeInfo => {
  //     chrome.tabs.get(activeInfo.tabId, tab => {
  //       const protocol = wurl('protocol', tab.url);
  //       if (protocol === 'chrome' || protocol === 'chrome-extension') {
  //         console.log('NOICE');
  //       } else if (wurl('domain', tab.url) === this.currentSite) {
  //         console.log('SAME SITE');
  //       } else {
  //         if (this.currentSite !== null) {
  //           this.stopInterval();
  //           BL.reconcileRecords(this.currentSite, this.counter);
  //         }
  //         console.log('DIFF SITE');
  //         this.currentSite = wurl('domain', tab.url);
  //         this.startInterval();
  //       }
  //     });
  //   });
  //   chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  //     if (!tab.url) {
  //       console.log('Not a valid url');
  //     } else {
  //       const tabSite = wurl('domain', tab.url);
  //       const protocol = wurl('protocol', tab.url);
  //       const validUrl = tabSite !== this.currentSite && tabSite !== undefined &&
  //         protocol !== 'chrome' && protocol !== 'chrome-extension';
  //       if (validUrl) {
  //         this.currentSite = tabSite;
  //         console.log(this.currentSite);
  //         this.startInterval();
  //       }
  //     }
  //   });
  // }
  isValidProtocol(url) {
    const protocol = wurl('protocol', url);
    return protocol !== 'chrome' && protocol !== 'chrome-extension';
  }
  saveRecords() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    BL.reconcileRecords(this.currentSite, this.dbCounter);
  }
  startInterval() {
    this.counter = 1;
    this.dbCounter = 1;
    this.intervalId = setInterval(() => {
      const now = moment().format('DD-MM-YYYY');
      if (now !== this.currentDate) {
        if (this.intervalId !== null) {
          this.saveRecords();
        }
        // Whatever its not like this needs to be precise
        this.currentDate = now;
        this.startInterval();
      } else {
        this.counter = this.counter += 1;
        this.dbCounter = this.dbCounter += 1;
        if (this.dbCounter % 60) {
          BL.reconcileRecords(this.currentSite, this.dbCounter);
          this.dbCounter = 0;
        }
        console.log(moment().second(this.counter).format('HH : mm : ss'));
      }
    }, 1000);
  }
}
