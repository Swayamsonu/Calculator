let input = document.getElementById('texts');

function clicks(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = '';
}

function calculateResult() {
  let result = eval(input.value);
  input.value = result;
}

function clearLast() {
  var display = document.getElementById("texts").value;
  document.getElementById("texts").value = display.slice(0, -1);
}
