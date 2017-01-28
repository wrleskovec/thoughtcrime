import HTML5Backend from 'react-dnd-html5-backend';
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
export function HTML5BackendWrap() {
  if (window.__isReactDndBackendSetUp) {
    HTML5Backend.teardown();
  }
  return HTML5Backend;
}
