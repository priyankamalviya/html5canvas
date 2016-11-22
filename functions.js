window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d"),
   xpos = 0;

  //  setInterval(function(){
  //    draw(xpos);
  //    xpos++;
  //  }, 1000/30);

  setInterval(function(){
    requestAnimationFrame(draw);
  }, 1000/40);

 function draw(){
     context.clearRect(0, 0, 600, 600);
     context.beginPath();
     context.arc(xpos, 300, 20, 0, Math.PI * 2);
     context.fill();
     xpos++;
     //requestAnimationFrame(draw);
   }
};
