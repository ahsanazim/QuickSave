chrome.commands.onCommand.addListener(function(command) {

  if (command == "mute-this-tab") {
    // get the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the muted status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'muted': !current.mutedInfo.muted });
      });
  }

  if (command == "mute-other-tabs") {
    let currTabUrl = '';
    // get the current tab
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      currTab = tabs[0];        // only ever returns array of size 1
      currTabUrl = currTab.url;     // record current tab's url
      // get all tabs
      chrome.tabs.query({},(allTabs) => {
        // iterate through them
        allTabs.forEach((curr,val,idx) => {
          // if it isn't our current tab
          if (curr.url != currTabUrl) {
            // mute it
            chrome.tabs.query({url: curr.url}, function(tabs) {
              // Toggle the muted status
              var current = tabs[0]
              chrome.tabs.update(current.id, {'muted': !current.mutedInfo.muted });
              });
          }
        });
      });
    });
  }

  if (command == "close-other-tabs") {
    let currTabUrl = '';
    // get the current tab
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      currTab = tabs[0];        // only ever returns array of size 1
      currTabUrl = currTab.url;     // record current tab's url
      // get all tabs
      chrome.tabs.query({}, (allTabs) => {
        // iterate through them
        allTabs.forEach((curr,val,idx) => {
          // if it isn't our current tab
          if (curr.url != currTabUrl) {
            // close it
            chrome.tabs.remove(curr.id);
          }
        });
      });
    });
  }

  if (command == "pin-this-tab") {
    // get our currently focused tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the pinned status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': !current.pinned });
      });
  }
});
