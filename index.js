const display = document.getElementById("display");

function appendToDislay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
function clearDislay() {
  display.value = "";
}
