// this is the background code...


// let's display sone text on the icon

browser.browserAction.setBadgeText ( { text: 'Q' } );

// listen for our browerAction to be clicked

browser.browserAction.onClicked.addListener(function (tab) {

	// for the current tab, inject the "inject.js" file & execute it
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript({
  file: "/refreshScript.js",
  allFrames: true
});
executing.then(onExecuted, onError);

});
