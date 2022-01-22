var botonencriptar = document.querySelector("#btn-encriptar");
botonencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  // var texto = document.getElementById("input-texto").value;
  var accion = desencripatar();
  document.getElementById("msg").value = accion;
});
