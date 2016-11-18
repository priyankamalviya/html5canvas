window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  //var gradient = context.createLinearGradient(100, 100, 200, 200);
  //
  // gradient.addColorStop(0, "red");
  // gradient.addColorStop(0.5, "green");
  // gradient.addColorStop(1,"blue");
  //
  // context.fillStyle = gradient;
  // context.fillRect(0, 0, 1000, 1000);
var gradient = context.createRadialGradient(100, 100,0, 100, 100, 50);

 gradient.addColorStop(0, "white");
 gradient.addColorStop(1,"lightcoral");

context.fillStyle = gradient;
context.beginPath();

context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.fill();
};
