function sendFocus(focus){
  console.log('doing something');
    chrome.runtime.sendMessage({focus:focus});
}
sendFocus('focus');

window.addEventListener('focus',function(){
    sendFocus('focus');
},false);

window.addEventListener('blur',function(){
    sendFocus('blur');
},false);
