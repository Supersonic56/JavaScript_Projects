// a function with a dictionary data type
function myDictionary() {
    var Cat = {
        species:"mammal",
        color:"grey",
        breed:"Scottish Fold",
        age:1,
        sound:"meow",
        name:"Fi"
    };
    delete Cat.name; //removes the Name KVP from the dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Cat.breed;
}