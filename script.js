// Note - Canvas is used for draw the elements by using javascript; And canvas use the 2d graphis animation.
// getContext helps to get the context element for the drawing; 
// 2d let use draw the shape and size. inside the browser.
const canvas = document.getElementById("sketch");
    const ctx = canvas.getContext("2d");

  // Assigning value to the functions and re-render that again. 

function draw () {
  // Will this works i don't have any ideas about this thing's; 

    // Set canvas size to window dimensions
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    canvas.width = window_width;// it will provide you the window inside width; 
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
  // let's store the line to the variables; 
    let starting_point = ctx.moveTo(450, 765); // Starting point
    console.log(starting_point);
    let ending_point = ctx.lineTo(550, 765); // Endpoint, moving down 100 pixels
    console.log(ending_point);
    ctx.stroke();

    // Circle
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 30;
    ctx.arc(500, 720, 15, 0, Math.PI * 2, false);
    ctx.stroke();

}
draw();
// Track the users inputs; 

window.addEventListener(event, user_keyWord(event));
function user_keyWord(event) {
  if(event.key === "d") {
    // To increase the numbers of the x. Write the positive value; 
    // and set the value to the true; 
    // Checking if the buttons key is working or not; 
    console.log("You have pressed the d. And you have shifted to the right.")
    let key_value_right = true;
    if(key_value_right){
      // here i need to increase it.. 
    }
  } 
  if(event.key === "a"){
    // Decrease the numbers of the x. Write the negative number value to shift to the left.
    // and set the value true; ?? do i need to set the value true; 
    let key_value_left = true; 
    while(key_value_left){
      // decrese the value of the x. And set the value to the negative. 
    }
  }
}
