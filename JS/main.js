const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonigual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

botonNumeros.forEach(function (boton) {
  boton.addEventListener("click", function () {
    agregarNumero(boton.innerText);
  });
});

botonOpera.forEach(function (boton) {
  boton.addEventListener("click", function () {
    SelectOperacion(boton.innerText);
  });
});

botonigual.addEventListener("click", function () {
  calcular();
  actualizarDisplay();
});

botonDelete.addEventListener("click", function () {
  clear();
  actualizarDisplay();
});

function SelectOperacion(op) {
  if (opeActual == "") return;
  if (opeAnterior !== "") {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = "";
}

function calcular() {
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);

  if (isNaN(anterior) || isNaN(actual)) return;

  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "X":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }

  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";
}

function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function actualizarDisplay() {
  result.value = opeActual;
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
}

clear();
