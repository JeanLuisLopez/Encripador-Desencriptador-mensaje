const textArea = document.querySelector("[data-text-area]");
textArea.addEventListener("selectionchange", (e) => {
  e.preventDefault();
  const hiddenMessage = document.querySelector("[data-hidden-message]");
  const hiddenCopy = document.querySelector("[data-hidden-copy]");
  console.log(textArea.value.length);
  if (textArea.value.length !== 0) {
    hiddenCopy.classList.remove("value-copy--hidden");
    hiddenMessage.classList.add("value-copy--hidden");
  } else {
    hiddenCopy.classList.add("value-copy--hidden");
    hiddenMessage.classList.remove("value-copy--hidden");
  }
});
