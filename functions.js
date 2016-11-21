window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");

   var imageData = context.getImageData(0, 0, 600, 600);
   for(var x =100; x<200; x++){
     for(var y = 100; y<200; y++){
       var index = (y * imageData.width + x)* 4;
       imageData.data[index] = 255;
       imageData.data[index+3] = 255;
     }
   }
   context.fillRect(0,0,600,600);
   context.putImageData(imageData, 0, 0, 100, 100, 100, 100);
};
