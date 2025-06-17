// Note - Canvas is used for draw the elements by using javascript; And canvas use the 2d graphis animation. 
// getContext helps to get the context element for the drawing; 
// 2d let use draw the shape and size. inside the browser.

const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");
// Setting the background color of the canvas. 
// Taking the full widht and the heights; 
var window_width= window.innerWidth;
var window_height = window.innerHeight;
canvas.width= window_width;
canvas.height = window_height;
//Set the background color 
ctx.fillStyle = "pink";
ctx.fillRect(0,0,window_width,window_height);
// Stroke
ctx.lineWidth= 8;
ctx.strokeStyle = "orange";
ctx.moveTo(30,140); // First param is used to move left , right and another is used to move to the up and down; 
ctx.lineTo(140,140); // Firs param is used to increase the line size and another is used and second param is used to set the directions;
ctx.stroke(); // To call the stroke. It is a methods; 

// Meaning of the begin paths; 
// Defination > It is used to create a new path and reset the current path and starts the new empty paths in the canvas 2d rendering context; 
// without the beginPath() the canvas return the previous and new drawing command like lineTo, moveTo will added to it. creating a unwanted shapes. 

// Arc(circle);
ctx.beginPath(); // New Path;
ctx.strokeStyle = "red";
ctx.lineWidth = 30;
ctx.arc(100,75,15,0,Math.PI * 2,false);
ctx.stroke();
