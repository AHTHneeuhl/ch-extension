/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(() => {
  console.log("I just Installed");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked");
});

/******/ })()
;
//# sourceMappingURL=background.js.map