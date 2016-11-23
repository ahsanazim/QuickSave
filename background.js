// note -- keybinding needs to be set manually as well from the
// bottom of the chrome://extensions page

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Toggle the pinned status
    var current = tabs[0]
    chrome.tabs.update(current.id, {'muted': !current.mutedInfo.muted });
    });
});



// TODO -- refactor the command to do pattern matching
// include other utilites,
// e.g. muting all tabs
// e.g. also - closing all other tabs
