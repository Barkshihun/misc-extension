"use strict";
const pcBtn = document.body.querySelector("#pc");
const BASE = "https://www.bing.com/search?q=";
const PC_TEXT = "1234567890123456789012345678901234";
pcBtn.addEventListener("click", () => {
  for (let i = 0; i < 34; i++) {
    const queryStr = PC_TEXT.slice(i);
    const url = BASE + queryStr;
    window.open(url, undefined, "popup");
  }
});
