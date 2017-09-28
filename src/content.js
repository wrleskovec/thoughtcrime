import ifvisible from 'ifvisible.js';

ifvisible.setIdleDuration(10);

function sendFocus(focus) {
  chrome.runtime.sendMessage({ focus });
}
sendFocus('focus');

ifvisible.on('focus', () => sendFocus('focus'));
// some websites load intermediate state that triggers blur
setTimeout(() => {
  ifvisible.on('blur', () => setTimeout(() => { sendFocus('blur'); }, 55));
}, 50);
ifvisible.on('idle', () => sendFocus('idle-blur'));
ifvisible.on('wakeup', () => sendFocus('focus'));
