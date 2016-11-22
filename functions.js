window.onload = function() {
   var canvas = document.getElementById("canvas"),
   context = canvas.getContext("2d"),
   x =100,
   y = 100;

   document.body.addEventListener("keydown", function(event){
     switch(event.keyCode){
       case 37: //left
       x--;
       draw();
       break;

       case 39: //right
       x++;
       draw();
       break;
     }
   });


   function draw(){
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.beginPath();
     context.arc(x, y, 20, 0, Math.PI * 2);
     context.fill();
   }

   draw();
  //  rect = canvas.getBoundingClientRect(),
  //  mouseX,
  //  mouseY;

//   btn = {
//     x: 100,
//     y:100,
//     w:100,
//     h:50,
//     selected: false
//   };
//
//   drawButton();
//   canvas.addEventListener("click", function(event){
//     var rect = canvas.getBoundingClientRect(),
//     x = event.clientX - rect.left,
//     y = event.clientY - rect.top;
//
//     if(x>= btn.x && x<=btn.x + btn.w &&
//       y>=btn.y && y<=btn.y + btn.h){
//         btn.selected = !btn.selected;
//         drawButton();
//     }
//
//   });
//
//   canvas.addEventListener("mousemove", function(event){
//     var rect = canvas.getBoundingClientRect(),
//     x = event.clientX - rect.left,
//     y = event.clientY - rect.top;
//
//     if(x>= btn.x && x<=btn.x + btn.w &&
//       y>=btn.y && y<=btn.y + btn.h){
//         canvas.style.cursor = "pointer";
//     }
//     else
//       canvas.style.cursor = "auto";
//   });
//
// function drawButton(){
//   context.fillStyle = btn.selected ? "red": "gray";
//   context.fillRect(btn.x, btn.y, btn.w, btn.h);
// }


//    canvas.addEventListener("mousedown", onMouseDown);
//
// function onMouseDown(event){
//   mouseX = event.clientX - rect.left;
//   mouseY = event.clientY - rect.top;
//   canvas.addEventListener("mousemove", onMouseMove);
//   document.body.addEventListener("mouseup",onMouseUp);
// }
// function onMouseMove(event){
//   context.beginPath();
//   context.moveTo(mouseX, mouseY);
//   mouseX = event.clientX - rect.left;
//   mouseY = event.clientY - rect.top;
//   context.lineTo(mouseX, mouseY);
//   context.stroke();
// }
// function onMouseUp(event){
//   canvas.removeEventListener("mousemove", onMouseMove);
//   document.body.removeEventListener("mouseup", onMouseUp);
// }
};
