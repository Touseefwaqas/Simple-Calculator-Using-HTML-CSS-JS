let resultsDisplay = document.querySelector(".display-area--results");
let operationDisplay = document.querySelector(".display-area--operation");

function addToDisplay(val) {
  let newValue = resultsDisplay.value;

  let lastNum = newValue.split(/[\+\-\*\/]/).pop();
  console.log(lastNum);

  if (val === '.' && lastNum.includes('.')) {
    return; 
  }

  resultsDisplay.value += val;

  fixOverFlowInResults();

}

function deleteFromDisplay() {
  resultsDisplay.value = resultsDisplay.value.toString().slice(0, -1);
  fixOverFlowInResults();
}

function clearDisplay() {
  resultsDisplay.value = '';
  operationDisplay.value = '';
}

function solve() {
  operationDisplay.value = resultsDisplay.value;
  resultsDisplay.value = eval(resultsDisplay.value);
}

function fixOverFlowInResults() {
  if (resultsDisplay.value.length > 10) {
    resultsDisplay.style.fontSize = "1.5rem";
  } else {
    resultsDisplay.style.fontSize = "2rem"
  }
}

