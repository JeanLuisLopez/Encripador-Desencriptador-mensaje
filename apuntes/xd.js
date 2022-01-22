var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  var nombreform = form.nombre.value;
  var pesoform = form.peso.value;
  var alturaform = form.altura.value;
  var gorduraform = form.gordura.value;

  var pasienteTr = document.createElement("tr");
  var nombreTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  var tabla = document.querySelector("#tabla-pacientes");

  nombreTd.textContent = nombreform;
  pesoTd.textContent = pesoform;
  alturaTd.textContent = alturaform;
  gorduraTd.textContent = gorduraform;

  pasienteTr.appendChild(nombreTd);
  pasienteTr.appendChild(pesoTd);
  pasienteTr.appendChild(alturaTd);
  pasienteTr.appendChild(gorduraTd);
  tabla.appendChild(pasienteTr);

  console.log(pasienteTr);
});
var pasientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pasientes.length; i++) {
  var pasiente = pasientes[i];
  var tdPeso = pasiente.querySelector(".info-peso");

  var peso = tdPeso.textContent;

  var tdAltura = pasiente.querySelector(".info-altura");

  var altura = tdAltura.textContent;

  var tdIMC = pasiente.querySelector(".info-imc");

  var pesoEsValido = true;
  var alturaEsValida = true;

  if (peso < 0 || peso > 100) {
    tdIMC.textContent = "Peso erroneo";
    pesoEsValido = false;
    pasiente.classList.add("pasienteincorrecto");
  }

  if (altura < 0 || altura > 3.0) {
    tdIMC.textContent = "Altura erroneo";
    alturaEsValida = false;
    // pasiente.classList.add("pasienteincorrecto");
  }

  if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura);

    tdIMC.textContent = imc.toFixed(2);
  }
}
