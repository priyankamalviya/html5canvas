window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");

canvas.addEventListener("click", function(event){
  context.beginPath();
  context.arc(event.clientX, event.clientY, 10, 0, Math.PI * 2);
  context.stroke();
});
};
