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
  
  decimal.addEventListener("click", function () {
    inputDecimal(decimal.value);
    updateDisplay();
  });
  
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
      //if operator has been entered
    if (calc.operatorEntered === true) {
        //overwrite bottom line
      calc.displayString = btnVal;
      //add to formula on top line
      calc.formulaString += btnVal;
      //reset operator entered variable
      calc.operatorEntered = false;
    } else {
        //otherwise, if display is zeroed out
      if (calc.displayString == "0") {
          //overwrite both lines
        calc.displayString = btnVal;
        calc.formulaString = btnVal;
      } else {
//otherwise, concatenate value onto both lines
        calc.formulaString += btnVal;
        calc.displayString += btnVal;
      }
    }
  }

  //add function to process decimal input
  function inputDecimal(btnVal) {
      //if displayString does not contain a decimal
    if (!calc.displayString.includes(btnVal)) {
        //add decimal onto both lines
      calc.displayString += btnVal;
      calc.formulaString += btnVal;
    }
  }

  //add function to handle operators
  function handleOperator(btnVal) {
    console.log(calc.formulaString);
    console.log(/[+*\/-]{1}-{1}/.test(calc.formulaString));
    //if formula line contains two operators, one being a minus
    if (/[+*\/-]{1}-{1}/.test(calc.formulaString)) {
        //replace whole string with a minus
      calc.formulaString = calc.formulaString.replace(/[+*\/-]{1}-{1}/g, btnVal);
      return;
    }
  //if an operator has been entered,
    if (calc.operatorEntered) {
        //and if the operator pressed is a minus,
      // if (btnVal == "-") {
      //     //add it to the formula
      //   calc.formulaString += btnVal;
  
      //   return;
      // } 
      if (btnVal!==operatorEntered) {
          //otherwise, replace operator at end of formula with entered operator
        calc.formulaString = calc.formulaString.replace(
        calc.formulaString.charAt(calc.formulaString.length - 1),
        btnVal);
  
        return;
      }

      if (calc.firstOperand) {
        if (calc.secondOperand) {
          //if first operand and second operand and operator exists, calculate the result
          switch (calc.operator) {
            case "+":
              add(calc.firstOperand,calc.secondOperand);
              break;
          
          case "-":
            subtract(calc.firstOperand,calc.secondOperand);
            break;
            case "*":
              multiply(calc.firstOperand,calc.secondOperand);
              break;
      case "/":
        divide(calc.firstOperand,calc.secondOperand);
        break;
          }
        }
      }

    }
  //if equals operator has been pressed,
    if (calc.equalsPressed === true) {
        //add result of calculation to current formula
      calc.formulaString = calc.firstOperand + btnVal;
      //set equals pressed to false
      calc.equalsPressed = false;
      //set operator entered to true
      calc.operatorEntered = true;
      return;
    }
  //otherwise, declare operator entered
    calc.operatorEntered = true;
    //add to formula
    calc.formulaString += btnVal;
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
