canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvents="empty";
var last_position_of_x, last_position_of_y;
color="aquamarine";
width_of_line=2;
canvas.addEventListener("mouseDown", my_mousedown);
 function my_mousedown(e){
mouseEvents="mouseDown";
 }
 canvas.addEventListener("mouseLeave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvents="mouseLeave";
 }
 canvas.addEventListener("mouseUp", my_mouseup);
 function my_mouseup(e){
     mouseEvents="mouseUp";
 }
 canvas.addEventListener("mouseMove", my_mousemove);
 function my_mousemove(e){
     current_position_of_mouse_x = e.client.X - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     
     if (mouseEvents=="mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;

         console.log("Last position of x and y coordinates = ");
         console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
         ctx.moveTo(last_position_of_x, last_position_of_y);

         console.log("Current position of x and y coordinates = ");
         console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
         ctx.stroke();
     }

     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;

 }