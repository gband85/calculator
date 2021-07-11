//create object to hold calculation data
const calc = {
  firstOperand: "",
  secondOperand: "",
  operator: "",
  equalsPressed: false,
  displayValue: ""
};

// Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
// Add a “clear” button.
let numberButtons = document.querySelectorAll(".btn.number");
let multiplyButton = document.querySelector("#multiply");
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let divideButton = document.querySelector("#divide");
let equalsButton = document.getElementById("equals");
let clearButton = document.getElementById("clear");
let backspaceButton = document.getElementById("plus_minus");

let decimalButton = document.querySelector("#decimal");
let display = document.getElementById("display");

//add function to process clear button
function clearDisplay() {
  display.textContent = "0"
  calc.firstOperand = "";
  calc.secondOperand = ""
  calc.operator = "";
  calc.displayValue="";
}

function updateDisplay(displayValue) {

  display.textContent = displayValue;
}

// Here are some use cases (abilities your project needs to have):

//start by creating functions for the following items.
// add
function add(firstOperand, secondOperand) {
  return Number(firstOperand) + Number(secondOperand);
}
// subtract
function subtract(firstOperand, secondOperand) {
  return Number(firstOperand) - Number(secondOperand);
}
// multiply
function multiply(firstOperand, secondOperand) {
  return Number(firstOperand) * Number(secondOperand);
}
// divide
function divide(firstOperand, secondOperand) {
  return Number(firstOperand) / Number(secondOperand);
}
// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(firstOperand, operator, secondOperand) {
  let result,answer
    if (firstOperand=="0" && operator=="/" && secondOperand=="0") {
answer = "U wot mate?";
  }
else {
  //calculate the result
  switch (operator) {
    case "+":
      //perform operation
      result = add(firstOperand, secondOperand);
      break;
    case "-":
      //perform operation
      result = subtract(firstOperand, secondOperand);
      break;
    case "*":
      //perform operation
      result = multiply(firstOperand, secondOperand);
      break;
    case "/":
      //perform operation
      result = divide(firstOperand, secondOperand);
      break;
  }
    //return result
    answer = (Math.round((result + Number.EPSILON) * 100000000000000) / 100000000000000).toString();
  
    if (answer.length>15) {
     answer = answer.slice(0,14);
    }
    
}
return answer;
}

function inputNumber(buttonValue) {
  //if display is zeroed out
  if (display.textContent === "0") {
    //overwrite display
    calc.displayValue = buttonValue;
  }

else {
  if (calc.displayValue.length!==15) {
  calc.displayValue+=buttonValue;
  }
}
updateDisplay(calc.displayValue);
}

function inputOperator(buttonValue) {

if (calc.operator) {
calc.displayValue = operate(calc.firstOperand,calc.operator,calc.displayValue);
calc.firstOperand=calc.displayValue;
updateDisplay(calc.displayValue);
}
else {
calc.firstOperand=calc.displayValue;
}
calc.operator = buttonValue;  
calc.displayValue = "";
}

// Create the functions that populate the display when you click the number button

numberButtons.forEach(numberButton => {
  numberButton.addEventListener("click", function () {
    inputNumber(numberButton.value);
  });
});

addButton.addEventListener("click", function () {
  inputOperator(addButton.value);
});

subtractButton.addEventListener("click", function () {
  inputOperator(subtractButton.value);
});

divideButton.addEventListener("click", function () {
  inputOperator(divideButton.value);
});

multiplyButton.addEventListener("click", function () {
  inputOperator(multiplyButton.value);
});

clearButton.addEventListener("click", function () {
  clearDisplay();
});

decimalButton.addEventListener("click", function () {
  if (display.textContent=="0") {
   calc.displayValue=display.textContent+decimalButton.value;   
 } 
else {
  if (!calc.displayValue.includes(decimalButton.value) && calc.displayValue.length!==15) {
    calc.displayValue+=decimalButton.value;
  }  
}
updateDisplay(calc.displayValue);
})

equalsButton.addEventListener("click", function () {
  if (calc.firstOperand) {
calc.displayValue = operate(calc.firstOperand,calc.operator,calc.displayValue);
calc.firstOperand=calc.displayValue;
updateDisplay(calc.displayValue);
calc.displayValue="";
  }
});

//execute clear and update display functions on page load
window.onload = function () {
  clearDisplay();

};

  // Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
  // You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
  // This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
  // Gotchas: watch out for and fix these bugs if they show up in your code:
  // Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.
  // You should round answers with long decimals so that they don’t overflow the screen.
  // Pressing = before entering all of the numbers or an operator could cause problems!
  // Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
  // Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
  // EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
  // EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.
  // EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
  // EXTRA CREDIT: Add keyboard support!