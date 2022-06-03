import { encryptor, dencryptor } from "./encryptorDencryptor.js";
import { hidden } from "./hidden.js";

const botonEncryptor = document.querySelector('[data-btn-="encryptor"]');
botonEncryptor.addEventListener("click", function (event) {
  event.preventDefault();
  let text = document.querySelector("[data-text-area]").value;
  document.querySelector("[data-value-copy]").innerHTML = encryptor(text);
  hidden();
});

const botonDencryptor = document.querySelector('[data-btn-="dencryptor"]');
botonDencryptor.addEventListener("click", function (event) {
  event.preventDefault();
  var text = document.querySelector("[data-text-area]").value;
  document.querySelector("[data-value-copy]").innerHTML = dencryptor(text);
  hidden();
});
