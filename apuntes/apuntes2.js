function copy() {
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#btn-copy").addEventListener("click", copy);
