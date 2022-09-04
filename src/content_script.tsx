chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    window.alert(msg.color);
    sendResponse("Change color to " + msg.color);
  } else {
    window.alert("empty msg");
    sendResponse("Color message is none.");
  }
});
