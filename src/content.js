import ifvisible from 'ifvisible.js';

function sendFocus(focus) {
  console.log(`Sending: ${focus}`);
  chrome.runtime.sendMessage({ focus });
}
sendFocus('focus');

ifvisible.on('blur', () => sendFocus('blur'));
ifvisible.on('focus', () => setTimeout(() => { sendFocus('focus'); }, 10));
