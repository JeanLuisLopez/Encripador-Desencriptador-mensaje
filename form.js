var botonencriptar = document.querySelector("#btn-encriptar");
botonencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  var texto = document.getElementById("input-texto").value;

  var resultado = encripatar(texto);

  document.getElementById("msg").value = resultado;
});

var botondesencriptar = document.querySelector("#btn-desencriptar");

botondesencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  var texto = document.getElementById("input-texto").value;
  var resultado = desencriptar(texto);
  document.getElementById("msg").value = resultado;
});
