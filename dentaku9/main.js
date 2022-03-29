let result = "";
let isCalc = false;

window.onload = function() {
  result = document.querySelector("#result");
}

function cClick() {
  result.value = "0";
  isCalc = false;
};

function num(val) {
  if(isCalc) result.value = "0";
  isCalc = false;

  if(result.value == "0" && val == "0") {
    result.value = "0";
  } else if(result.value == "0" && val == ".") {
    result.value = "0.";
  } else if(result.value == "0") {
    result.value = val;
  } else {
    result.value += val;
  }
};

function operator(val) {
  if(isCalc) isCalc = false;

  if(isOperator()) {
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
};

function equal() {
  if(isOperator()) result.value = result.value.slice(0, -1);

  let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)) {
    result.value = "Error";
  } else {
    result.value = temp;
    isCalc = true;
  }
};

function isOperator() {
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
};