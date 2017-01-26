import ifvisible from 'ifvisible.js';

function sendFocus(focus) {
  chrome.runtime.sendMessage({ focus });
}
sendFocus('focus');

ifvisible.on('focus', () => sendFocus('focus'));
// some websites load intermediate state that triggers blur
setTimeout(() => {
  ifvisible.on('blur', () => setTimeout(() => { sendFocus('blur'); }, 55));
}, 50);
