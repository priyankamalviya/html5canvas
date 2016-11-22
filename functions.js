window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d"),
   angle = 0;
   //xpos = 0;

  //  setInterval(function(){
  //    draw(xpos);
  //    xpos++;
  //  }, 1000/30);

  setInterval(function(){
    requestAnimationFrame(draw);
  }, 1000/40);

 function draw(){
     context.clearRect(0, 0, 600, 600);
     context.save();
     context.translate(300, 300);
     var scale = Math.sin(angle) +1;
     context.scale(scale,scale);
     context.rotate(angle);
     context.fillRect(-50, -50, 100, 100);
     angle += 0.1;
     context.restore();
    //  context.beginPath();
    //  context.arc(xpos, 300, 20, 0, Math.PI * 2);
    //  context.fill();
    //  xpos++;
     //requestAnimationFrame(draw);
   }
};
