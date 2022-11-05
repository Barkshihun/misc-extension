"use strict";
const css = ".codetag {background-color:rgb(60, 60, 60); color:white; border-radius: 5px; padding: 2px 5px;}";
const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

/** @param {HTMLElement} tag */
const addOriginalText = (tag) => {
  for (let i = 0; i < tag.childNodes.length; i++) {
    const childNode = tag.childNodes[i];
    if (childNode.nodeType === 3 && childNode.nodeValue !== "\n      ") {
      tag.title = childNode.nodeValue;
    } else {
      addOriginalText(childNode);
    }
  }
};
const transformCodeTagToText = () => {
  const codeTags = document.body.querySelectorAll("code");
  for (let i = 0; i < codeTags.length; i++) {
    const codeTag = codeTags[i];
    const parentNode = codeTag.parentNode;
    const wrapper = document.createElement("span");
    wrapper.className = "codetag";
    addOriginalText(codeTag);
    wrapper.title = codeTag.title;
    wrapper.append(...codeTag.childNodes);
    parentNode.replaceChild(wrapper, codeTag);
  }
};
chrome.storage.local.get({ enabled: false }, ({ enabled }) => {
  if (enabled) {
    transformCodeTagToText();
  }
});
