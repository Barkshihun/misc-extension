const btn = document.querySelector("button");
const input = document.querySelector("input");
const indicator = document.querySelector("h1");
const onEnabled = () => {
  btn.innerText = "활성화 중";
  chrome.action.setBadgeText({ text: "ON" });
  chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
};
const onDisabled = () => {
  btn.innerText = "비활성화 중";
  chrome.action.setBadgeText({ text: "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
};
chrome.storage.local.get({ enabled: true, opacity: 0.1 }, ({ enabled, opacity }) => {
  indicator.innerText = opacity;
  input.value = opacity;
  if (enabled) {
    onEnabled();
  } else {
    onDisabled();
  }
});
btn.addEventListener("click", () => {
  chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
    if (enabled) {
      onDisabled();
    } else {
      onEnabled();
    }
    chrome.storage.local.set({ enabled: !enabled });
    chrome.tabs.query({ active: true, currentWindow: true, url: "https://www.youtube.com/*" }, ([tab]) => {
      if (tab) {
        chrome.tabs.sendMessage(tab.id, { enabled: !enabled });
      }
    });
  });
});
input.addEventListener("input", (event) => {
  const opacity = event.target.value;
  indicator.innerText = opacity;
  chrome.storage.local.set({ opacity });
  chrome.tabs.query({ active: true, currentWindow: true, url: "https://www.youtube.com/*" }, ([tab]) => {
    if (tab) {
      chrome.tabs.sendMessage(tab.id, { opacity });
    }
  });
});
