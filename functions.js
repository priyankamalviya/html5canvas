window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");


   context.fillRect(0, 0, 600, 600);

   for(var i =0; i<1000; i++){
     var x = Math.round(Math.random() * 600);
     var y = Math.round(Math.random() * 600);

     setPixel(context, x, y, 255, 255, 255, 255);
   }

   function setPixel(context, x, y, r, g, b, a){
     var imageData = context.createImageData(1, 1);
     imageData.data[0] = r;
     imageData.data[1] = g;
     imageData.data[2] = b;
     imageData.data[3] = a;

     context.putImageData(imageData, x, y);
   }

  //  var imageData = context.getImageData(0, 0, 600, 600);
  //  for(var x =100; x<200; x++){
  //    for(var y = 100; y<200; y++){
  //      var index = (y * imageData.width + x)* 4;
  //      imageData.data[index] = 255;
  //      imageData.data[index+3] = 255;
  //    }
  //  }
  //  context.fillRect(0,0,600,600);
  //  context.putImageData(imageData, 0, 0, 100, 100, 100, 100);
  // context.fillStyle = "brown";
  // context.fillRect(0, 0, 600, 600);
  // var pixel = getPixel(context, 100, 100);
  //
  // console.log("red:" +pixel.r);
  // console.log("green:"+ pixel.g);
  // console.log("blue:" +pixel.b);
  // console.log("alpha:" +pixel.a);
  //
  // function getPixel(context, x, y){
  //   var imageData = context.getImageData(x, y, 1, 1);
  //   return{
  //     r: imageData.data[0],
  //     g: imageData.data[1],
  //     b: imageData.data[2],
  //     a: imageData.data[3],
  //   }
  // }
};
