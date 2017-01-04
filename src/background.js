import wurl from 'wurl';
import BL from './blockList.js';
import Filter from './Filter.js';
import moment from 'moment';
import _ from 'lodash';

BL.init().then(() => {
  Filter.init();
});

// const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';
// function loadFilteredPage(tabId, url) {
//   setTimeout(() => {
//     chrome.tabs.update(tabId, { url });
//   }, 500);
// }
// function checkSchedule() {
//   return BL.getSchedule()
//     .then((schedule) => {
//       const now = moment();
//       const dayOfWeek = now.day();
//       // moment.js starts with sunday as first day of week
//       const convertedDay = (dayOfWeek === 6) ? 0 : dayOfWeek + 1;
//       const currentHour = now.get('hour');
//       const currentMinute = now.get('minute');
//       const currentQuarter = currentHour * 4 + Math.ceil(currentMinute / 15);
//       return schedule.items[convertedDay][currentQuarter].event;
//     });
// }
// function handleAction(action, details) {
//   return checkSchedule()
//     .then((event) => {
//       switch (event) {
//         case 'Block All': {
//           if (action === 'block') {
//             loadFilteredPage(details.tabId, BLOCKED_PAGE);
//           } else if (action === 'limit') {
//             loadFilteredPage(details.tabId, BLOCKED_PAGE);
//           }
//           break;
//         }
//         case 'Accept All':
//           break;
//         default: {
//           if (action === 'block') {
//             loadFilteredPage(details.tabId, BLOCKED_PAGE);
//           } else if (action === 'limit') {
//             loadFilteredPage(details.tabId, BLOCKED_PAGE);
//           }
//           break;
//         }
//       }
//     });
// }
// function matchPatterns(details) {
//   return BL.getRegexPatterns()
//     .then(patterns => {
//       if (patterns !== undefined && patterns.items.length > 0) {
//         return patterns.items.find(action => {
//           const reg = new RegExp(action.regex, 'i');
//           return reg.test(details.url);
//         });
//       }
//       return undefined;
//     });
// }
// function urlCheck(details) {
//   console.log('urlCheck Called:');
//   console.log(details.url);
//   console.log(details.tabId);
//   const protocol = wurl('protocol', details.url);
//   if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
//     const site = wurl('domain', details.url);
//     BL.getRecord(site)
//       .then(record => {
//         const aclMatch = record.advAction.find(action => {
//           const reg = new RegExp(action.regex, 'i');
//           return reg.test(details.url);
//         });
//         if (aclMatch) {
//           handleAction(aclMatch.action, details);
//         } else {
//           matchPatterns(details)
//             .then(patternMatch => {
//               if (patternMatch) {
//                 handleAction(patternMatch.action, details);
//               } else {
//                 handleAction(record.action, details);
//               }
//             });
//         }
//       })
//       .catch(() => {
//         matchPatterns(details)
//           .then(patternMatch => {
//             if (patternMatch) handleAction(patternMatch.action, details);
//           });
//       });
//   }
//   return {};
// }

chrome.windows.getAll({ populate: true }, (windows) => {
  windows.forEach((win) => {
    win.tabs.forEach((tab) => {
      if (Filter.isValidProtocol(tab.url)) {
        chrome.tabs.executeScript(tab.id, { file: 'content.js' });
      }
    });
  });
});
// interacting with popup for timer & content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.focus) {
    const senderSite = wurl('domain', sender.tab.url);
    if (request.focus === 'focus' && senderSite !== Filter.currentSite && senderSite
     && sender.tab.id !== Filter.currentTab && Filter.isValidProtocol(senderSite)) {
      Filter.popup = false;
      if (Filter.currentSite !== null) {
        Filter.saveRecords();
      }
      Filter.currentTab = sender.tab.id;
      Filter.currentSite = senderSite;
      Filter.startTime = moment();
    } else if (request.focus === 'blur') {
      console.log('BLUUUUUUUUUURRRRR');
      if (sender.tab.id === Filter.currentTab && senderSite && !Filter.popup) {
        Filter.saveRecords();
        Filter.startTime = null;
        Filter.currentSite = null;
        Filter.currentTab = null;
      }
    }
  }
  if (request.timer === 'popup') {
    Filter.popup = true;
    sendResponse({ seconds: Filter.getDuration() });
  }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabSite = wurl('domain', tab.url);
  console.log(`currentSite: ${Filter.currentSite}, tab: ${tabSite}`);
  const validUrl = tabSite !== Filter.currentSite && Filter.isValidProtocol(tab.url);
  if (validUrl) {
    Filter.currentSite = tabSite;
    Filter.currentTab = tab.id;
  }
});

chrome.webRequest.onBeforeRequest.addListener(_.debounce(Filter.urlCheck, 50), {
  urls: ['<all_urls>'],
  types: ['main_frame']
});
