내가 쓰려고 만든 잡다한 크롬 익스텐션

언젠간 쓸일이 있을 것 같은 코드

- 재귀적으로 태그 내부을 검색한다

```js
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
```
