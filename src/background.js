
function blockPageLoad(tabId) {
  chrome.tabs.update(tabId, {
    url: chrome.extension.getURL('blocked.html')
  });
}

function urlCheck(tabId, url, acl) {
  const aclName = `reduxPersist:${acl || 'block'}`;
  const ruleset = JSON.parse(localStorage.getItem(aclName));
  console.log(ruleset);
  if (ruleset.length > 0) {
    ruleset.forEach((rule) => {
      const ruleRegex = new RegExp(rule, 'i');
      if (ruleRegex.test(url)) {
        blockPageLoad(tabId);
      }
    });
  }
}


function beforeRequestCheck(details) {
  urlCheck(details.tabId, details.url);
}

chrome.webRequest.onBeforeRequest.addListener(beforeRequestCheck,
  { urls: ['<all_urls>'], types: ['main_frame'] },
  ['blocking']);
