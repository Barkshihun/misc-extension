const ytpProgressBarContainer = document.querySelector(".ytp-progress-bar-container");
const ytpChromeControls = document.querySelector(".ytp-chrome-controls");
const ytpPaidContentOverlayLink = document.querySelector(".ytp-paid-content-overlay-link");
const setOpacity = (opacity) => {
  ytpProgressBarContainer.style.opacity = opacity;
  ytpChromeControls.style.opacity = opacity;
  ytpPaidContentOverlayLink.style.opacity = opacity;
};
if (ytpProgressBarContainer) {
  chrome.storage.local.get({ enabled: false, opacity: 0.1 }, ({ enabled, opacity }) => {
    if (enabled === true) {
      setOpacity(opacity);
    }
  });
  chrome.runtime.onMessage.addListener(({ enabled, opacity }) => {
    if (enabled) {
      setOpacity(opacity);
    } else {
      setOpacity(1);
    }
  });
}
