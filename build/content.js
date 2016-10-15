function sendFocus(focus){
  chrome.runtime.sendMessage({focus:focus});
}
sendFocus('focus');

window.addEventListener('focus', () => {
  sendFocus('focus');
},false);

window.addEventListener('blur', () => {
  setTimeout(() => {
    sendFocus('blur');
  }, 100);
},false);
