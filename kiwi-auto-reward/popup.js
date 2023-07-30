"use strict";
const BASE = "https://www.bing.com/search?q=";
const PC_TEXT = "1234567890123456789012345678901234";
const MOBILT_TEXT = "qwertyuiopasdfghjklz";
const newPopup = (init, condition, device) => {
  let TEXT;
  switch (device) {
    case "pc":
      TEXT = PC_TEXT;
      break;
    case "mobile":
      TEXT = MOBILT_TEXT;
      break;
  }
  for (let i = init; i < condition; i++) {
    const queryStr = TEXT.slice(i);
    const url = BASE + queryStr;
    window.open(url, undefined, "popup");
  }
};
const firstPcBtn = document.body.querySelector("#firstPc");
const secondPcBtn = document.body.querySelector("#secondPc");
const thirdPcBtn = document.body.querySelector("#thirdPc");
const forthPcBtn = document.body.querySelector("#forthPc");
firstPcBtn.addEventListener("click", () => {
  newPopup(0, 8, "pc");
});
secondPcBtn.addEventListener("click", () => {
  newPopup(8, 16, "pc");
});
thirdPcBtn.addEventListener("click", () => {
  newPopup(16, 25, "pc");
});
forthPcBtn.addEventListener("click", () => {
  newPopup(25, 34, "pc");
});
const firstMobileBtn = document.body.querySelector("#firstMobile");
const secondMobileBtn = document.body.querySelector("#secondMobile");
const thirdMobileBtn = document.body.querySelector("#thirdMobile");
const forthMobileBtn = document.body.querySelector("#forthMobile");
firstMobileBtn.addEventListener("click", () => {
  newPopup(0, 5, "mobile");
});
secondMobileBtn.addEventListener("click", () => {
  newPopup(5, 10, "mobile");
});
thirdMobileBtn.addEventListener("click", () => {
  newPopup(10, 15, "mobile");
});
forthMobileBtn.addEventListener("click", () => {
  newPopup(15, 20, "mobile");
});
