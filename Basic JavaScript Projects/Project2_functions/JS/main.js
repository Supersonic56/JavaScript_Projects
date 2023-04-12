   // function to show 2 variables conacatenated
   function updateText() {
    var name = "John";
    var age = 30;
    document.getElementById("myText").innerHTML = "My name is " + name + " and I am " + age + " years old.";
  }
  
  // function to to concatenate a string using += operator
    function mergeFunction() {
        var join = "I am a half of an apple";
        join+=" and I am the other half.";
        document.getElementById("merge").innerHTML = join;
    }