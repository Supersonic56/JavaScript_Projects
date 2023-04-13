//a ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "\ to ride.";
}
//Keywords "new" and "this" in constructor function
function Dress (Brand, Style, Season, Color) {
    this.Dress_Brand = Brand;
    this.Dress_Style = Style;
    this.Dress_Season = Season;
    this. Dress_Color = Color;
    } 
    var Ana = new Dress ("Gap", "Boho", "Spring", "Red"); 
    var Bea = new Dress ("H&M", "Short", "Summer", "White"); 
    var Drea = new Dress ("DKNY", "Long", "Fall", "Beige");

// a function to display the results of the constructor in an HTML element
function myFunction () {
    document.getElementById("New_and_This").innerHTML = 
    "Drea wears a " + Drea. Dress_Color + "-colored " + 
    Drea. Dress_Style + "\ dress in " + Drea. Dress_Season;
    } 

//Nested function

function count_Function() {
    document.getElementById("Nested_function").innerHTML = Count();
    function Count() {
        var start_nr = 10;
        function Plus_two() {start_nr += 2;}
        Plus_two();
        return start_nr;
    } 
}