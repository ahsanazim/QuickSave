// note -- keybinding needs to be set manually as well from the
// bottom of the chrome://extensions page

chrome.commands.onCommand.addListener(function(command) {

  if (command == "mute-this-tab") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the muted status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'muted': !current.mutedInfo.muted });
      });
  }
  if (command == "mute-other-tabs") {
    // may not work because tabs can be in other windows but still active:
    // chrome.tabs.query({ active: false }, function(tabs) {
    //   // Toggle the muted status
    //   console.log({ ...tabs });
    //   var current = tabs[0]
    //   chrome.tabs.update(current.id, {'muted': !current.mutedInfo.muted });
    //   });
  }
  if (command == "close-other-tabs") {


  }
  if (command == "pin-this-tab") {

  }
});



// TODO
// include other utilites,
// - muting all other tabs
// - closing all other tabs
// - pinning current tab
// think about changing name. chromeKeyBinder?
