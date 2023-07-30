"use strict";
const btnZero = document.getElementById("zero");
const btnHalf = document.getElementById("half");
const btnOne = document.getElementById("one");

const sendQuery = (opacity) => {
  chrome.tabs.query({ active: true, currentWindow: true, url: "https://www.youtube.com/*" }, ([tab]) => {
    if (tab) {
      chrome.tabs.sendMessage(tab.id, { opacity });
    }
  });
};
btnZero.addEventListener("click", () => {
  sendQuery(0);
});
btnHalf.addEventListener("click", () => {
  sendQuery(0.5);
});
btnOne.addEventListener("click", () => {
  sendQuery(1);
});
