// Note - Canvas is used for draw the elements by using javascript; And canvas use the 2d graphis animation. 
// getContext helps to get the context element for the drawing; 
// 2d let use draw the shape and size. inside the browser.

const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10,10,400,600); // (x,y,widht,height)


