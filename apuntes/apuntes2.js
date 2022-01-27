function copy() {
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#btn-copy").addEventListener("click", copy);
////////////////
///////////////
const myText = document.getElementById(elemento);
myText.style.csstex = `height:${myText.scrollHeight}px; overflow-y:hidden`;

myText.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});
///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});
