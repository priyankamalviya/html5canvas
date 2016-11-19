window.onload = function() {
  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  //image= document.getElementById("dog");
  image = document.createElement("img");

image.src = "http://bit-101.com/dog.jpg";
image.addEventListener("load", function(){
  context.drawImage(image,10,0)
});
};
