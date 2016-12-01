export function notify(message) {
  chrome.notifications.create({
    type: 'basic',
    title: 'ThoughtCrime',
    message,
    iconUrl: './icons/tc-128.png',
  }, id => {
    setTimeout(() => {
      chrome.notifications.clear(id);
    }, 2000);
  });
}
