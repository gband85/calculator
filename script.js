var btnVal;
//grab elements
var display = document.getElementById("display");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");
var formula = document.getElementById("formula");
var formulaString;

var operators = document.querySelectorAll(".btn.operator");
var decimal = document.querySelector("#decimal");
var numbers = document.querySelectorAll(".btn.number");
var multiply = document.querySelector("#multiply");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var divide = document.querySelector("#divide");
var plus_minus = document.getElementById("plus_minus");

//create object to hold calculation data
const calc = {
    displayString: "0",
    formulaString: "",
  
    firstOperand: null,
    equalsPressed: false,
  
    operatorEntered: false
  };

  //add event listeners to take input from buttons
  numbers.forEach(element => {
    element.addEventListener("click", function () {
    });
  });
  
  decimal.addEventListener("click", function () {
  });
  
  add.addEventListener("click", function () {
  });
  
  subtract.addEventListener("click", function () {
  });
  
  divide.addEventListener("click", function () {
  });
  
  multiply.addEventListener("click", function () {
  });
  
  clear.addEventListener("click", function () {
  });
  
  equals.addEventListener("click", function () {
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