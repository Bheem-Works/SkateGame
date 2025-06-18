const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");

// Variables to track the line's x-coordinates
let lineXStart = 450;
let lineXEnd = 550;

function draw() {
  // Set canvas size to window dimensions
  const window_width = window.innerWidth;
  const window_height = window.innerHeight;
  canvas.width = window_width;
  canvas.height = window_height;

  // Clear canvas and set background color
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, window_width, window_height);

  // Rectangle
  ctx.fillStyle = "black";
  ctx.fillRect(200, 80, 1000, 900);

  // Line (using dynamic x-coordinates)
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 15;
  ctx.moveTo(lineXStart, 765); // Starting point
  ctx.lineTo(lineXEnd, 765);   // Endpoint
  ctx.stroke();

  // Circle
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 30;
  ctx.arc(500, 720, 15, 0, Math.PI * 2, false);
  ctx.stroke();
}

// Initial draw
draw();

// Handle keyboard input
window.addEventListener("keyup", user_keyWord);

function user_keyWord(event) {
  console.log("Key pressed:", event.key);
  let moved = false;

  if (event.key === "d") {
    // Move line right by increasing x-coordinates
    lineXStart += 10;
    lineXEnd += 10;
    console.log("Moved right. New line start:", lineXStart, "end:", lineXEnd);
    moved = true;
  } else if (event.key === "a") {
    // Move line left by decreasing x-coordinates
    lineXStart -= 10;
    lineXEnd -= 10;
    console.log("Moved left. New line start:", lineXStart, "end:", lineXEnd);
    moved = false;
  }; 

  // Redrawing it again; 
   if (moved) {
    draw();
  }
}
