function urlCheck(details) {
  const aclName = 'reduxPersist:block';
  const ruleset = JSON.parse(localStorage.getItem(aclName));
  if (ruleset.length > 0) {
    const isBlocked = ruleset.some((rule) => {
      const ruleRegex = new RegExp(rule, 'i');
      return ruleRegex.test(details.url);
    });
    if (isBlocked) {
      return {
        redirectUrl: chrome.extension.getURL('blocked.html')
      };
    }
  }
  return {};
}
chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
  urls: ['<all_urls>'],
  types: ['main_frame']
}, ['blocking']);
