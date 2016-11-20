window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");
//   //image= document.getElementById("dog");
//   image = document.createElement("img");
//
// image.src = "http://bit-101.com/dog.jpg";
// image.addEventListener("load", function(){
//   context.drawImage(image,200,10,150,150,0,0,300, 150)
// });

context.beginPath();
for(var i=0;i<100;i++){
  context.moveTo(Math.random() * 600, Math.random() * 600);
  context.lineTo(Math.random() * 600, Math.random() * 600);
}
context.stroke();
var image = document.createElement("img");
image.src= canvas.toDataURL("image/jpg", 0.9);
document.body.appendChild(image);
};
