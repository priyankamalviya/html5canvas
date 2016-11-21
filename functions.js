window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d");

   var num = 20;
   context.translate(300, 300);
   for(var i = 0; i<num; i++){
     context.rotate(Math.PI * 2/ num);
     context.beginPath();
     context.arc(100, 0, 10, 0, Math.PI * 2);
     context.fill();
   }

  //  context.rotate(Math.PI / 4);
  //  context.translate(200, 0);
  //  context.fillRect(0, 0, 100, 100);

  //  context.translate(100,100);
  //  context.fillRect(0,0,100,100);

// context.scale(2,2);
//    for(var j =0; j<10; j++){
//      context.save();
//    for(var i =0; i<10; i++){
//      context.fillRect(0,0,30,30);
//      context.translate(40,0);
//    }
//    context.restore();
//    context.translate(0,40);
//  }
};
