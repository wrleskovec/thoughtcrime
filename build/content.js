function sendFocus(focus){
  chrome.runtime.sendMessage({ focus }, (response) => {
    console.log('not needed');
  });
}
sendFocus('focus');
const TC_SCRIPT_ALREADY_LOADED = true;

window.addEventListener('focus', () => {
  sendFocus('focus');
},false);

window.addEventListener('blur', () => {
  setTimeout(() => {
    sendFocus('blur');
  }, 50);
},false);
