window.onload = function(){
  //id
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
      //context.fillRect(10,10,100,200);

      context.beginPath();

      //drawing commands

      //context.fill();
      context.moveTo(100,100);
      context.lineTo(300,100);
      context.lineTo(300,200);
      context.lineTo(100,200);
      //context.lineTo(100,100);

      context.closePath();
      context.stroke();
}
