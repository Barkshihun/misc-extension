const ytpProgressBarContainer = document.querySelector(".ytp-progress-bar-container");
const ytpChromeControls = document.querySelector(".ytp-chrome-controls");
if (ytpProgressBarContainer) {
  chrome.storage.local.get({ enabled: false, opacity: 0.1 }, ({ enabled, opacity }) => {
    if (enabled === true) {
      ytpProgressBarContainer.style.opacity = opacity;
      ytpChromeControls.style.opacity = opacity;
    }
  });
  chrome.runtime.onMessage.addListener(({ enabled, opacity }) => {
    if (enabled) {
      ytpProgressBarContainer.style.opacity = opacity;
      ytpChromeControls.style.opacity = opacity;
    } else {
      ytpProgressBarContainer.style.opacity = opacity;
      ytpChromeControls.style.opacity = opacity;
    }
  });
}
