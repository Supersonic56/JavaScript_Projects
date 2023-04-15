//While Loop
//"call_Loop()", id="loop"

function call_Loop() {
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

//For Loops
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function rat_pics () {
    var Rat_Picture = []; 
    Rat_Picture [0] = "sleeping";
    Rat_Picture [1] = "playing";
    Rat_Picture [2] = "eating";
    Rat_Picture [3] = "purring";
    document.getElementById("Rat").innerHTML = "In this picture, the rat is " +
    Rat_Picture [3] + ".";
}

//Const
function constant_function () {
    const Musical_Instrument = {type: "banjo", brand: "Local", color: "brown"}; 
    Musical_Instrument.color = "ecru";
    Musical_Instrument.price = "$500";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + "\ was\ " + Musical_Instrument.price;

}

//an object with properties and a method
function car() {
    let car = { 
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description: function  () {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

//The Break Statement to be seen in the console
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }

  //The Continue Statement with a click button
  function _Cont() {
    let text = "Start";
        for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "<br>" + "The number is " + i;
        }
        document.getElementById("continue").innerHTML = text;
  }
  