"use strict";
const mobileBtn = document.body.querySelector("#mobile");
const pcBtn = document.body.querySelector("#pc");
const BASE = "https://www.bing.com/search?q=";
const PC_TEXT = "1234567890123456789012345678901234";
const MOBILT_TEXT = "qwertyuiopasdfghjklzxcvbnmqwer";
mobileBtn.addEventListener("click", () => {
  chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ["mobile_rule"] }, () => {
    for (let i = 0; i < 20; i++) {
      const queryStr = MOBILT_TEXT.slice(i);
      const url = BASE + queryStr;
      window.open(url, undefined, "popup");
    }
  });
});
pcBtn.addEventListener("click", () => {
  chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: ["mobile_rule"] }, () => {
    for (let i = 0; i < 34; i++) {
      const queryStr = PC_TEXT.slice(i);
      const url = BASE + queryStr;
      window.open(url, undefined, "popup");
    }
  });
});
