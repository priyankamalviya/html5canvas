window.onload = function(){
  //id
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
      // for(var x=1;x<=600;x++){
      //   var y = 300+ Math.sin(x*0.03) * 300;
      //   context.lineTo(x,y);
      // }
      // var p0 = {
      //   x: Math.random() * 600,
      //   y: Math.random() * 600
      // },
      // p1={
      //   x: Math.random() * 600,
      //   y: Math.random() * 600
      // },
      // p2={
      //   x: Math.random() * 600,
      //   y: Math.random() * 600
      // },
      // p3={
      //   x: Math.random() * 600,
      //   y: Math.random() * 600
      // };
      context.beginPath();
//       context.moveTo(p0.x, p0.y);
//       context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
//       context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
//       context.stroke();
//
//       drawPoint(p0);
//       drawPoint(p1);
//       drawPoint(p2);
//       drawPoint(p3);
//
//       function drawPoint(p){
//         context.fillRect(p.x-4, p.y-4, 8, 8);
//       }

context.arc(400, 300, 200, 0, Math.PI * 2);
context.stroke();
 };
