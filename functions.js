window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  context.fillStyle = "#cccccc";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";

  context.font =" 50px Arial";
  //context.textAlign = "right";
  context.fillText("Hello, world", 150, 150);

  var textMetrics = context.measureText("Hello, world");
  width = textMetrics.width;

  context.strokeRect(150, 150, width, -50);
  };
