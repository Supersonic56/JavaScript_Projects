// a global variable
var X = 11;
function add_nr_A() {
    document.write(21 + X + "<br>");
}
function add_nr_B() {
    document.write(121 + X + "<br>");
}
add_nr_A();
add_nr_B();


// a local variable
function add_nr_C() {
    var Y = 25;
    document.write(21 + Y + "<br>");
}
//
function add_nr_D() {
    document.write(121 + Y + "<br>");
}
add_nr_C();
// error shown for add_nr_D in the console of a web browser's developer tools due to lack of a local variable
add_nr_D();

//If Statements with a date, hour
function get_Date() {
    if (new Date().getHours() < 17) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//If Statements with a date, year
function get_Year() {
    if (new Date().getFullYear() > 2022) {
    document.getElementById("Year").innerHTML = "If you see this message, it is at least year 2023";
    }
}

//simple If statements to be written in the DOM console
if (4 > 3) {
    console.log("The number on the left is smaller than the number on the right");
    }

if (3 > 2) {
    console.log("3 is greater than 2");
  } else {
    console.log("2 is greater than or equal to 3");
  }
  
//If, Else statements
  function checkNumber() {
    const numberInput = document.getElementById("number-input");
    const resultElement = document.getElementById("result");
    
    const number = parseInt(numberInput.value);
    
    if (isNaN(number)) {
      resultElement.textContent = "Please enter a valid number";
    } else {
      resultElement.textContent = "Number is valid!";
    }
  }
  
//If, Else, ElseIf statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0 ) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function showGradeMessage() {
    /* const is a keyword in JavaScript that is used to declare a variable with a constant value. 
    Once a variable is declared using const, its value cannot be reassigned.*/
    const gradeInput = document.getElementById("grade-input");
    const gradeMessage = document.getElementById("grade-message");
  
    //parseInt is a built-in JavaScript function that is used to parse a string and convert it to an integer (a whole number).
    const grade = parseInt(gradeInput.value);
    
    if (isNaN(grade) || grade < 0 || grade > 100) {
      gradeMessage.textContent = "Please enter a valid grade between 0 and 100";
    } else if (grade >= 90) {
      gradeMessage.textContent = "You got an A!";
    } else if (grade >= 80) {
      gradeMessage.textContent = "You got a B!";
    } else if (grade >= 70) {
      gradeMessage.textContent = "You got a C!";
    } else if (grade >= 60) {
      gradeMessage.textContent = "You got a D!";
    } else {
      gradeMessage.textContent = "You got an F...";
    }
  }

  //parseInt exercise - executed in the console of a web browser's developer tools
  const str = "42";
  const num = parseInt(str, 10);
  console.log(num); // Output: 42


