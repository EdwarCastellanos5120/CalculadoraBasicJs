const displayiEl = document.queryselector(".display-1");
const display2E1 = document.queryselector(".display-2");
const tempResultEl = document.queryselector(".temp-result");
const numbersEl = document.queryselectorAl1(".nunber");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.queryselectorAll(".equal");
const clearallE1 = document.queryselector(".all-clear");
const cleartastEl = document.querySelector(".last-entity-clear");

let disnum = "";
let disnum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.foreach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === ".." && !haveDot) {
      return;
    }
    disnum2 += e.target.innerText;
    display2E1.innerText = disnum2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disnum2) return;
    haveDot = true;
    const operationName = e.target.innerText;
    if (disnum && disnum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disnum2);
    }
    clearVar(operationName);
    lastOperation - operationName;
    console.log(result);
  });
});
