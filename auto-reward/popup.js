"use strict";
const firstBtn = document.body.querySelector("#first");
const secondBtn = document.body.querySelector("#second");
const thirdBtn = document.body.querySelector("#third");
const forthBtn = document.body.querySelector("#forth");
const BASE = "https://www.bing.com/search?q=";
const PC_TEXT = "1234567890123456789012345678901234";
const newPopup = (init, condition) => {
  for (let i = init; i < condition; i++) {
    const queryStr = PC_TEXT.slice(i);
    const url = BASE + queryStr;
    window.open(url, undefined, "popup");
  }
};
firstBtn.addEventListener("click", () => {
  newPopup(0, 8);
});
secondBtn.addEventListener("click", () => {
  newPopup(8, 16);
});
thirdBtn.addEventListener("click", () => {
  newPopup(16, 25);
});
forthBtn.addEventListener("click", () => {
  newPopup(25, 34);
});
