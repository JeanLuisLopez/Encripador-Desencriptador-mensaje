const textArea = document.querySelector("[data-text-area]");
textArea.addEventListener("selectionchange", (e) => {
  e.preventDefault();
  if (textArea.value.length === 0) hidden();
});

export function hidden() {
  const copyValue = document.querySelector("[data-value-copy]");
  const hiddenMessage = document.querySelector("[data-hidden-message]");
  const hiddenCopy = document.querySelector("[data-hidden-copy]");
  if (textArea.value.length !== 0) {
    hiddenCopy.classList.remove("value-copy--hidden");
    hiddenMessage.classList.add("value-copy--hidden");
  } else {
    copyValue.innerHTML = "";
    hiddenCopy.classList.add("value-copy--hidden");
    hiddenMessage.classList.remove("value-copy--hidden");
  }
}
