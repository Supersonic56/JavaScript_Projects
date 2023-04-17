//Switch Statement
function showMessage() {
    let dayOfWeek = document.getElementById("day").value;
    let dayName;
  
    switch (dayOfWeek) {
      case "1":
        dayName = "Sunday";
        break;
      case "2":
        dayName = "Monday";
        break;
      case "3":
        dayName = "Tuesday";
        break;
      case "4":
        dayName = "Wednesday";
        break;
      case "5":
        dayName = "Thursday";
        break;
      case "6":
        dayName = "Friday";
        break;
      case "7":
        dayName = "Saturday";
        break;
      default:
        dayName = "Unknown";
    }
  
    let message = `The day of the week is ${dayName}`;
    document.getElementById("message").innerHTML = message;
  }

  //getElementsByClassName() Method
  function Hello_World_Function () {
    var A = document.getElementsByClassName ("Click"); 
    A[0].innerHTML = "The text has changed!";
  }

  //HTML <canvas> Element
  // draw a diagonal line going through the canvas
  var c = document.getElementById("my_Canvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(500, 250);
  ctx.stroke();

  // draw a circle in the canvas
  var d = document.getElementById("my_Canvas");
  var dtx = d.getContext("2d");
  dtx.beginPath();
  dtx.arc(95, 50, 40, 0, 2 * Math.PI);
  dtx.stroke();  
  
  // draw a Text in the canvas
  var e = document.getElementById("my_Canvas");
  var etx = e.getContext("2d");
  etx.font = "30px Calibri";
  etx.fillText("My Art", 50, 200); //or .strokeText()

  // Create gradient
  var grd = etx.createLinearGradient(10, 10, 120, 20);
  grd.addColorStop(0, "green");
  grd.addColorStop(1, "white");

  // Fill with gradient
  etx.fillStyle = grd;
  etx.fillRect(25, 100, 100, 50);

//HTML <canvas> Element. exercise with inserting a drawing into the canvas
  function my_Canvas2_function () {
    var f = document.getElementById("my_Canvas2");
    var ftx = f.getContext("2d");
    var img = document.getElementById("build");
    ftx.drawImage(img,0, 0, 500, 250);
  }
  

  