"use strict";
const btn = document.body.querySelector("button");
const onEnabled = () => {
  btn.innerText = "활성화중";
  chrome.action.setBadgeText({ text: "ON" });
  chrome.action.setBadgeBackgroundColor({ color: [230, 0, 0, 255] });
};
const onDisabled = () => {
  btn.innerText = "비활성화중";
  chrome.action.setBadgeText({ text: "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
};
chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
  if (enabled) {
    onEnabled();
  } else {
    onDisabled();
  }
});
btn.addEventListener("click", () => {
  chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
    chrome.storage.local.set({ enabled: !enabled });
    if (enabled) {
      onDisabled();
    } else {
      onEnabled();
    }
  });
});
