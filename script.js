var version = "0.3 \"builder\"";
document.getElementById("version").innerHTML = version
c = document.getElementById("canvas");
ctx = c.getContext("2d");
const FPS = 30;
var t = 0; // t is never used, it was made to test in v0.0.1
var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();
var session = "AM"

setInterval(update, 1000 / FPS);

function update () {
  //not now

  // c.width=innerWidth* 0.97;
	// c.height=innerHeight* 0.85;
  
  //update time
   h = time.getHours();
   m = time.getMinutes();
   s = time.getSeconds();
   session = "AM"
 
  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM"
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  //draw the clock omg

  
  // background
  ctx.fillStyle = "#342c45";
  ctx.fillRect(0, 0, c.width , c.height);

  // table i guess??
  
  ctx.beginPath();
  ctx.strokeStyle = "#765432"
  ctx.fillStyle = "#765432"
  ctx.lineWidth = 1;
  ctx.moveTo(0, 360);
  ctx.lineTo(0,280);
  ctx.lineTo(50,240);
  ctx.lineTo(430,240);
  ctx.lineTo(480,280);
  ctx.lineTo(480,360);
  ctx.fill();
  ctx.closePath();

  // clock

  ctx.beginPath();
  ctx.strokeStyle = "#333"
  ctx.lineWidth = 35;
  ctx.fillStyle = "#222"
  ctx.moveTo(100, 130);
  ctx.lineTo(380, 130);
  ctx.lineTo(385, 132);
  ctx.lineTo(387, 137);
  ctx.lineTo(387, 280);
  ctx.lineTo(385, 285);
  ctx.lineTo(380, 287);
  ctx.lineTo(100, 287);
  ctx.lineTo(95, 285);
  ctx.lineTo(93, 280);
  ctx.lineTo(93, 137);
  ctx.lineTo(95, 132);
  ctx.lineTo(100, 130);
  ctx.lineTo(120,130);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = "#333";
  ctx.moveTo(80, 127);
  ctx.lineTo(140, 90);
  ctx.lineTo(340, 90);
  ctx.lineTo(400, 127);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  // display :D

  drawNumbers(105, h) ;
  
}

function drawNumbers (xpos, numbers) {
  for(var i = 0 ; i <= 1; i++){
  let l1 = Math.floor(numbers/10);
  let l2 = numbers % 10;  // im a genius
  drSiNu(l1, xpos);
  drSiNu(l2, xpos+ i *70);
  } 
} 
function drSiNu (n, x) {
  if (n === 2 || n === 3 || n === 5 || n === 6 || n === 7 || n === 8 || n === 9 || n === 0){
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#f00";
  ctx.moveTo( x + 10, 160);
  ctx.lineTo( x + 40, 160);
  ctx.stroke();
  ctx.closePath();
  } 
  if (n === 2 || n === 3 || n === 4 || n === 5 || n === 6 || n === 7 || n === 8 || n === 9){
    ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#f00";
  ctx.moveTo( x + 10, 220);
  ctx.lineTo( x + 40, 220);
  ctx.stroke();
  ctx.closePath();
  }
}