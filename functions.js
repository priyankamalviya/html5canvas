window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");

   context.shadowColor = "rgba(0,0,0,0.5)";

   //set shadow dynamically
   document.body.addEventListener("mousemove", function(event){
     context.clearRect(0,0,600,600);
     var dx = 300- event.clientX,
     dy = 300 - event.clientY,
     distance = Math.sqrt(dx * dx + dy * dy);


     context.shadowOffsetX = dx * 0.5;
     context.shadowOffsetY = dy * 0.5;
     context.shadowBlur = distance * 0.25;
     context.fillStyle = "red";
     context.fillRect(250, 250, 100, 100);
   });

   //set shadow manually
  //  context.shadowBlur = 10;
  //  context.shadowOffsetX = 10;
  //  context.shadowOffsetY = 10;
   //
  //  context.fillStyle = "red",
  //  context.fillRect(50,200,400,100);


  //  context.globalAlpha = 0.5;
  //  context.globalCompositeOperation = "destination-over";
  //  context.filStyle = "red";
  //  context.fillRect(200,50,100,400);
};
