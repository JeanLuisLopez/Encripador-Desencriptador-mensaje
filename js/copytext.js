const botoncopy = document.querySelector('[data-btn-="copy"]');
botoncopy.addEventListener("click", function (event) {
  event.preventDefault();
  const aux = document.createElement("textarea");
  let copyText = document.querySelector("[data-value-copy]").innerHTML;
  aux.innerHTML = copyText;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
});
