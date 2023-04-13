//Type Of Operator Assignment
// “document.write()” method and “type of” operator to display the data type of a variable
document.write(typeof "Noun" + "<br>");
document.write(typeof 5 + "<br>");
document.write(typeof "7" + 2 + "<br>");
// type coercion
document.write("7" + 2 + "<br>");

//Boolean Logic
document.write(9 > 3);
document.write("<br>");
document.write(9 < 3);
document.write("<br>");
//Double Equal Signs
document.write(9==9);
document.write("<br>");
document.write(9==8);
document.write("<br>");

//Triple Equal Signs
document.write("<br>");
A = 11;
B = 11;
document.write(A===B);
document.write("<br>");
C = 81;
D = "81";
document.write(C===D);
document.write("<br>");
E = "Amstaf";
F = "Amstaf";
document.write(E===F);
document.write("<br>");
G = 12;
H = "Amstaf";
document.write(G===H);
document.write("<br>");
I = 14;
J = 15;
document.write(I===J);
document.write("<br>");

//AND OR Operators
document.write("<br>");
document.write(6 > 1 && 11 > 3);
document.write("<br>");
document.write(6 > 7 || 11 > 3);
document.write("<br>");
document.write(6 > 7 || 11 > 23);
document.write("<br>");

//console.log() Method
console.log(2 + 2);
document.write("<br>");
console.log(3 > 2);


//Not a Number
function myNAN1() {
    document.getElementById("Test1").innerHTML = 0/0;
}
function myNAN2() {
    document.getElementById("Test2").innerHTML = isNaN("string");
}
function myNAN3() {
    document.getElementById("Test3").innerHTML = isNaN("9");
}
//floating point. infinity
function myInfinity() {
    document.getElementById("Infi").innerHTML = 2E310;
}

//Not Operator
function NOToperator1() {
    document.getElementById("Not1").innerHTML = !(21 > 11);
}
function NOToperator2() {
    document.getElementById("Not2").innerHTML = !(6 > 11);
}
