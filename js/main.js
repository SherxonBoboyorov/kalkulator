function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = eval(result);
}

function clearResult() {
  document.getElementById("result").value = "";
}
