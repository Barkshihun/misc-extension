"use strict";
const input = document.querySelector("input");
const indicator = document.querySelector("h1");
const btn = document.querySelector("button");

const onEnabled = () => {
  input.style.visibility = "visible";
  btn.innerText = "활성화중";
  chrome.action.setBadgeText({ text: "ON" });
  chrome.action.setBadgeBackgroundColor({ color: [230, 0, 0, 255] });
};
const onDisabled = () => {
  input.style.visibility = "hidden";
  btn.innerText = "비활성화중";
  chrome.action.setBadgeText({ text: "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
};
const sendQuery = (enabled, opacity) => {
  chrome.tabs.query({ active: true, currentWindow: true, url: "https://www.youtube.com/*" }, ([tab]) => {
    if (tab) {
      chrome.tabs.sendMessage(tab.id, { enabled, opacity });
    }
  });
};
const init = () => {
  chrome.storage.local.get({ enabled: false, opacity: 0.1 }, ({ enabled, opacity }) => {
    indicator.innerText = opacity;
    input.value = opacity;
    if (enabled) {
      onEnabled();
    } else {
      onDisabled();
    }
  });
};
input.addEventListener("input", (event) => {
  const opacity = event.target.value;
  indicator.innerText = opacity;
  chrome.storage.local.set({ opacity });
  chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
    sendQuery(enabled, opacity);
  });
});
btn.addEventListener("click", () => {
  chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
    if (enabled) {
      onDisabled();
    } else {
      onEnabled();
    }
    sendQuery(!enabled, input.value);
    chrome.storage.local.set({ enabled: !enabled });
  });
});
init();
