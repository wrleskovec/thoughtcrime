import wurl from 'wurl';
import BL from './blockList.js';
import Timer from './timer.js';

BL.init().then(() => {
  Timer.init();
});

const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

function loadFilteredPage(tabId, url) {
  setTimeout(() => {
    chrome.tabs.update(tabId, { url });
  }, 500);
}
function handleAction(action, details) {
  if (action === 'block') {
    loadFilteredPage(details.tabId, BLOCKED_PAGE);
  } else if (action === 'limit') {
    loadFilteredPage(details.tabId, BLOCKED_PAGE);
  }
}
function urlCheck(details) {
  const protocol = wurl('protocol', details.url);
  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
    const site = wurl('domain', details.url);
    BL.getRecord(site)
      .then(record => {
        const aclMatch = record.advAction.find(action => {
          const reg = new RegExp(action.text, 'i');
          return reg.test(details.url);
        });
        if (aclMatch) {
          handleAction(aclMatch.action, details);
        } else {
          handleAction(record.action, details);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return {};
}

chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
  urls: ['<all_urls>'],
  types: ['main_frame']
});
