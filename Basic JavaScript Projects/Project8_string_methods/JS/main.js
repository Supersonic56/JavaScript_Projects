// concat() Method
//p id="Concat" onclick="complete_Sentence()"

function complete_Sentence() {
    var bit_1 = "I dream in arcane blue<br>";
    var bit_2 = "as stars begin to shine,<br>";
    var bit_3 = "in sleep, I feel your love<br>";
    var bit_4 = "as heart entwines with grace,<br>";
    var bit_5 = "I touch the night above.<br>";
    var complete_Sentence = bit_1.concat(bit_2, bit_3, bit_4, bit_5);
    document.getElementById("Concat").innerHTML = complete_Sentence;
}

// slice() Method
//id = "Slice" , onclick="slice_Method()"
function slice_Method() {
    var Sentence = "All work and no play makes Jack a dull boy";
    var Section = Sentence.slice(21, 26);
    document.getElementById("Slice").innerHTML = Section;
}

//UpperCase() method
//id="input-text" onclick="convertToUpper()
function convertToUpper() {
    // the input element
    var input = document.getElementById("input-text");
    
    // the value of the input to be converted to uppercase
    var output = input.value.toUpperCase();
    
    // the output element and setting its text to the converted string
    var outputElement = document.getElementById("output");
    outputElement.textContent = output;
  }
  
  //Search() method - searches a string for a specified value and returns the position of the first occurrence
  //onclick="complete_Search()" id="Search" 
  function complete_Search() {
    let text = "Please locate where \'cocoloco\' occurs!";
    let index = text.search("cocoloco");
    document.getElementById("Search").innerHTML = index; 
  }

 //Search() method - example 2
 function searchForText() {
    var input2 = document.getElementById("input-text2").value.trim(); // trim the input string
    var output2 = input2.search("over");
    document.getElementById("output2").textContent = output2 >= 0 ? "The text was found at position " + output2 : "The text was not found.";
 }

 //Number method - toString()
 //"string_Method()" id="Number_to_string"
 function string_Method() {
    var X = 182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

  //toPrecision() Method
  function precision_Method() {
    var X = 18252.2578964852;
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

//toFixed() Method
function toFixed_Method() {
    var G = 15252.2578964852;
    document.getElementById("Fixed").innerHTML = G.toFixed(3);
}

//valueOf() Method
function valueOf_Method() {
    let text = "Hello beautiful World!";
    let result = text.valueOf();
    document.getElementById("valueOf").innerHTML = result;
}