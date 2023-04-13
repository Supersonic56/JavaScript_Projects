// function to add numbers
function addFunction() {
    var addition = 6 + 5;
    document.getElementById("Addition").innerHTML = "6 + 5 = " + addition;
  }

// function to subtract numbers
function subtractFunction() {
    var subtraction = 6 - 5;
    document.getElementById("Subtraction").innerHTML = "6 - 5 = " + subtraction;
  }

  // function to multiply numbers
function multiplyFunction() {
    var multiplication = 6 * 5;
    document.getElementById("Multiplication").innerHTML = "6 * 5 = " + multiplication;
  }

  // function to divide numbers
function divideFunction() {
    var division = 60 / 5;
    document.getElementById("Division").innerHTML = "60 / 5 = " + division;
  }

  // function for all basic math operations
  function comboMathFunction() {
    var combo = 2 * 3 * (4 + 5) / 6 - 1;
    document.getElementById("Combo").innerHTML = "2 * 3 * (4 + 5) / 6 - 1 = " + combo;
  }

  // function for modulus operation
  function modulusFunction() {
    var modulus = 56 % 5;
    document.getElementById("Modulus").innerHTML = "56 % 5 = " + modulus;
  }

  // function for negation operation
  function negationFunction() {
    var negation = 5;
    document.getElementById("Negation").innerHTML = "the nagation of 5 is  " + -negation;
  }

  // function for increment operation
  function incrementFunction() {
    var increment = 5;
    increment++;
    document.getElementById("Increment").innerHTML = "the increment of 5 by one is  " + increment;
  }

  // function for decrement operation
  function decrementFunction() {
    var decrement = 5;
    decrement--;
    document.getElementById("Decrement").innerHTML = "the decrement of 5 by one is  " + decrement;
  }

window.alert(Math.random() * 100);

  // function for a random number
  function randomNumber() {
    let random = Math.random();
    document.getElementById("Random").innerHTML = "the random number is  " + random;
  }

  // function for a floor number
  function floorNumber() {
    let number = 3.1;
    let floor = Math.floor(number);
    document.getElementById("Floor").innerHTML = "the floor number of 3.1 is  " + floor;
  }


/*  
let number1 = 3.7;
let roundedNumber1 = Math.floor(number); // Returns 3
console.log(roundedNumber1);

let number2 = 3.2;
let roundedNumber2 = Math.ceil(number); // Returns 4
console.log(roundedNumber2);

let number3 = 3.2;
let number4 = 3.7;
let roundedNumber3 = Math.round(number3); // Returns 3
let roundedNumber4 = Math.round(number4); // Returns 4
console.log(roundedNumber3);
console.log(roundedNumber4);

let numbers = [5, 2, 8, 1, 9];
let minValue = Math.min(...numbers); // Returns 1
let maxValue = Math.max(...numbers); // Returns 9
console.log(minValue);
console.log(maxValue);

let base = 2;
let exponent = 3;
let result = Math.pow(base, exponent); // Returns 8
console.log(result);
*/