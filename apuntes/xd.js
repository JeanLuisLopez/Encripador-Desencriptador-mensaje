function encripatar(palabra) {
  var texto = palabra;
  var numchar = texto.length;
  var salida = "";
  var caracter;

  var i;
  for (i = 0; i < numchar; i++) {
    caracter = texto.charAt(i);
    if (caracter === "a") {
      caracter = "ai";
    }

    if (caracter === "e") {
      caracter = "enter";
    }
    if (caracter === "i") {
      caracter = "imes";
    }
    if (caracter === "o") {
      caracter = "ober";
    }
    if (caracter === "u") {
      caracter = "ufat";
    }
    salida = salida + caracter;
  }
  return salida;
}
