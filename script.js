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