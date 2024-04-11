let number1 = 3;
let number2 = 5;

let num1 = (document.getElementById('num1-el').textContent = number1);
let num2 = (document.getElementById('num2-el').textContent = number2);
let resultEl = document.getElementById('result-el');

function add() {
  let result = number1 + number2;
  resultEl.textContent = 'Result: ' + result;
}

function subtract() {
  let result = number1 - number2;
  resultEl.textContent = 'Result: ' + result;
}

function multiply() {
  let result = number1 * number2;
  resultEl.textContent = 'Result: ' + result;
}

function divide() {
  let result = number1 / number2;
  resultEl.textContent = 'Result: ' + result;
}
