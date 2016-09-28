import wurl from 'wurl';
import BL from './blockList.js';
import Timer from './timer.js';

const siteTimer = new Timer();
BL.init().then(() => {
  siteTimer.init();
});

const BLOCKED_PAGE = 'https://www.github.com/wrleskovec';

function loadFilteredPage(tabId, url) {
  chrome.tabs.update(tabId, {
    url
  });
}

function urlCheck(details) {
  const protocol = wurl('protocol', details.url);
  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
    const site = wurl('domain', details.url);
    BL.checkSite(site)
      .then(record => {
        if (record.action === 'block') {
          loadFilteredPage(details.tabId, BLOCKED_PAGE);
        }
      });
  }
  return {};
}

chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
  urls: ['<all_urls>'],
  types: ['main_frame']
});
