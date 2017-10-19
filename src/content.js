import ifvisible from 'ifvisible.js';

function sendFocus(focus) {
  try {
    chrome.runtime.sendMessage({ focus });
  } catch (e) {
    ifvisible.off('focus');
    ifvisible.off('blur');
    ifvisible.off('idle');
    ifvisible.off('wakeup');
  }
}


ifvisible.setIdleDuration(120);

sendFocus('focus');

ifvisible.on('focus', () => sendFocus('focus'));
// some websites load intermediate state that triggers blur
setTimeout(() => {
  ifvisible.on('blur', () => setTimeout(() => { sendFocus('blur'); }, 55));
}, 50);
ifvisible.on('idle', () => sendFocus('idle-blur'));
ifvisible.on('wakeup', () => sendFocus('focus'));
