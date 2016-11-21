window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");

  //  context.translate(100,100);
  //  context.fillRect(0,0,100,100);

   for(var j =0; j<10; j++){
     context.save();
   for(var i =0; i<10; i++){
     context.fillRect(0,0,30,30);
     context.translate(40,0);
   }
   context.restore();
   context.translate(0,40);
 }
};
