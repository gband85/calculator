var btnVal;
//grab elements
var display = document.getElementById("display");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");
var formula = document.getElementById("formula");
var formulaString;

var operators = document.querySelectorAll(".btn.operator");
var decimal = document.querySelector("#decimal");
var numberButtons = document.querySelectorAll(".btn.number");
var multiplyButton = document.querySelector("#multiply");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");
var divideButton = document.querySelector("#divide");
var plus_minus = document.getElementById("plus_minus");

//create object to hold calculation data
const calc = {
    displayString: "0",
    formulaString: "",  
    firstOperand: "",
    secondOperand: "",
    operator: "",
    equalsPressed: false    
  };

  //add event listeners to take input from buttons
  numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", function () {
    inputNumber(numberButton.value);
    updateDisplay();
    });
  });
  
  // decimal.addEventListener("click", function () {
  //   inputDecimal(decimal.value);
  //   updateDisplay();
  // });
  
  addButton.addEventListener("click", function () {
    handleOperator(add.value);
    updateDisplay();
  });
  
  subtractButton.addEventListener("click", function () {
    handleOperator(subtract.value);
    updateDisplay();
  });
  
  divideButton.addEventListener("click", function () {
    handleOperator(divide.value);
    updateDisplay();
  });
  
  multiplyButton.addEventListener("click", function () {
    handleOperator(multiply.value);
    updateDisplay();
  });
  
  clear.addEventListener("click", function () {
    clearDisplay();
    updateDisplay();
  });
  
  equals.addEventListener("click", function () {
    calculateResult();
    updateDisplay();
  });

  //add function to process number input
  function inputNumber(btnVal) {

  }

  //add function to handle operators
function operate(firstOperand, operator, secondOperand) {
  //calculate the result
  switch (operator) {
    case "+":
      add(firstOperand, secondOperand);
      break;

    case "-":
      subtract(firstOperand, secondOperand);
      break;
    case "*":
      multiply(firstOperand, secondOperand);
      break;
    case "/":
      divide(firstOperand, secondOperand);
      break;
  }
}


  //add functions to evaluate
  function add(firstOperand,secondOperand) {
    return Number(firstOperand) + Number(secondOperand);
  }
  function subtract(firstOperand,secondOperand) {
    return Number(firstOperand) - Number(secondOperand);
  }
  function multiply(firstOperand,secondOperand) {
    return Number(firstOperand) * Number(secondOperand);
  }
  function divide(firstOperand,secondOperand) {
    return Number(firstOperand) / Number(secondOperand);
  }

  //add function to update display on button press
  function updateDisplay() {
    display.innerHTML = calc.displayString;
    formula.innerHTML = calc.formulaString;
  }

  //add function to process clear button
  function clearDisplay() {
    calc.displayString = "0";
  
    calc.firstOperand = null;
  
    calc.operatorEntered = false;
    calc.formulaString = "";
    calc.equalsPressed = false;
  }

  //execute clear and update display functions on page load
  window.onload = function () {
    clearDisplay();
    updateDisplay();
  };
