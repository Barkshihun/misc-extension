"use strict";
const setOpacity = (opacity) => {
  document.querySelector(".ytp-gradient-bottom").style.opacity = opacity;
  document.querySelector(".ytp-chrome-bottom").style.opacity = opacity;
};
chrome.runtime.onMessage.addListener(({ opacity }) => {
  setOpacity(opacity);
});
