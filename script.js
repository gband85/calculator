let btnVal;
//grab elements

let formulaString;

let decimal = document.querySelector("#decimal");

let plus_minus = document.getElementById("plus_minus");

//create object to hold calculation data
const calc = {
    displayString: "0",
    formulaString: "",  
    firstOperand: "",
    secondOperand: "",
    operator: "",
    equalsPressed: false    
  };

  
  
  // decimal.addEventListener("click", function () {
  //   inputDecimal(decimal.value);
  //   updateDisplay();
  // });

  //add function to handle operators



  //add functions to evaluate
  
    


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
  // Here are some use cases (abilities your project needs to have):

  //start by creating functions for the following items.
  // add
  function add(firstOperand,secondOperand) {
    return Number(firstOperand) + Number(secondOperand);
  }
  // subtract
  function subtract(firstOperand,secondOperand) {
    return Number(firstOperand) - Number(secondOperand);
  }
  // multiply
  function multiply(firstOperand,secondOperand) {
    return Number(firstOperand) * Number(secondOperand);
  }
  // divide
  function divide(firstOperand,secondOperand) {
    return Number(firstOperand) / Number(secondOperand);
  }
  // Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
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
  // Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
  // Do not worry about wiring up the JS just yet.
  // There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
  // Add a “clear” button.
  let numberButtons = document.querySelectorAll(".btn.number");
  let multiplyButton = document.querySelector("#multiply");
  let addButton = document.querySelector("#add");
  let subtractButton = document.querySelector("#subtract");
  let divideButton = document.querySelector("#divide");
  let equalsButton = document.getElementById("equals");
  let clearButton = document.getElementById("clear");
  let display = document.getElementById("display");
  let formula = document.getElementById("formula");
  // Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a letiable somewhere for use in the next step.

  //add event listeners to take input from buttons
numberButtons.forEach(numberButton => {
  numberButton.addEventListener("click", function () {
  inputNumber(numberButton.value);
  updateDisplay();
  });
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

clearButton.addEventListener("click", function () {
  clearDisplay();
  updateDisplay();
});

equalsButton.addEventListener("click", function () {
  calculateResult();
  updateDisplay();
});

  function inputNumber(buttonValue) {
    //if operator has been entered

      //otherwise, if display is zeroed out
    if (calc.displayString == "0") {
        //overwrite both lines
      calc.displayString = buttonValue;
      calc.formulaString = buttonValue;
    } else {
//otherwise, concatenate value onto both lines
      calc.formulaString += buttonValue;
      calc.displayString += buttonValue;
    }  
}

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