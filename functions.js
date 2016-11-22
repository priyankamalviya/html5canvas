window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d"),
   xpos = 0;

   setInterval(function(){
     draw(xpos);
     xpos++;
   }, 1000/30);

   function draw(x){
     context.clearRect(0, 0, 600, 600);
     context.beginPath();
     context.arc(x, 300, 20, 0, Math.PI * 2);
     context.fill();
   }
};
