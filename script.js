// Note - Canvas is used for draw the elements by using javascript; And canvas use the 2d graphis animation. 
// getContext helps to get the context element for the drawing; 
// 2d let use draw the shape and size. inside the browser.
const canvas = document.getElementById("sketch");
    const ctx = canvas.getContext("2d");

    // Set canvas size to window dimensions
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    canvas.width = window_width;
    canvas.height = window_height;

    // Set background color
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, window_width, window_height);

    // Rectangle
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(200, 80, 1000, 900);
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.moveTo(450, 765); // Starting point
    ctx.lineTo(550, 765); // Endpoint, moving down 100 pixels
    ctx.stroke();

    // Circle
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 30;
    ctx.arc(500, 720, 15, 0, Math.PI * 2, false);
    ctx.stroke();