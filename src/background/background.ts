chrome.runtime.onInstalled.addListener(() => {
  console.log("I just Installed");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked");
});
