import wurl from 'wurl';
import BL from './blockList.js';
import Timer from './timer.js';
import moment from 'moment';

BL.init().then(() => {
  Timer.init();
});

const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

function loadFilteredPage(tabId, url) {
  setTimeout(() => {
    chrome.tabs.update(tabId, { url });
  }, 500);
}
function checkSchedule() {
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
function handleAction(action, details) {
  return checkSchedule()
    .then((event) => {
      switch (event) {
        case 'Block All': {
          if (action === 'block') {
            loadFilteredPage(details.tabId, BLOCKED_PAGE);
          } else if (action === 'limit') {
            loadFilteredPage(details.tabId, BLOCKED_PAGE);
          }
          break;
        }
        case 'Accept All':
          break;
        default: {
          if (action === 'block') {
            loadFilteredPage(details.tabId, BLOCKED_PAGE);
          } else if (action === 'limit') {
            loadFilteredPage(details.tabId, BLOCKED_PAGE);
          }
          break;
        }
      }
    });
}
function matchPatterns(details) {
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


function urlCheck(details) {
  const protocol = wurl('protocol', details.url);
  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
    const site = wurl('domain', details.url);
    BL.getRecord(site)
      .then(record => {
        const aclMatch = record.advAction.find(action => {
          const reg = new RegExp(action.regex, 'i');
          return reg.test(details.url);
        });
        if (aclMatch) {
          handleAction(aclMatch.action, details);
        } else {
          matchPatterns(details)
            .then(patternMatch => {
              if (patternMatch) {
                handleAction(patternMatch.action, details);
              } else {
                handleAction(record.action, details);
              }
            });
        }
      })
      .catch(() => {
        matchPatterns(details)
          .then(patternMatch => {
            if (patternMatch) handleAction(patternMatch.action, details);
          });
      });
  }
  return {};
}

chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
  urls: ['<all_urls>'],
  types: ['main_frame']
});
