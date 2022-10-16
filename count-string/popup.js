const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const noSpace = document.querySelector("#noSpace");
const withSpace = document.querySelector("#withSpace");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  noSpace.innerText = `공백 제외: ${input.value.replace(/ /g, "").length}자`;
  withSpace.innerText = `공백 포함: ${input.value.length}자`;
});
