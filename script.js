// Note - Canvas is used for draw the elements by using javascript; And canvas use the 2d graphis animation. 
// getContext helps to get the context element for the drawing; 
// 2d let use draw the shape and size. inside the browser.

const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");
// Setting the background color of the canvas. 
// Taking the full widht and the heights; 
var window_width= window.innerWidth;
var window_height = window.innerHeight;
canvas.style.backgroundColor = "pink";
canvas.width= window_width;
canvas.height = window_height;

// Stroke 
ctx.lineWidth= 8;
ctx.strokeStyle = "orange";
ctx.moveTo(30,140); // First param is used to move left , right and another is used to move to the up and down; 
ctx.lineTo(280,140);
ctx.stroke();
