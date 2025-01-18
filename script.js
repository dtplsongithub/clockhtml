var version = "1.0 \"release!\"";
document.getElementById("version").innerHTML = version
c = document.getElementById("canvas");
ctx = c.getContext("2d");
const FPS = 4;
var t = 0; // t war never used until v1.01, it was made to test in v0.0.1
var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();
var session = "AM"

setInterval(update, 1000 / FPS);

function update () {
  time = new Date();
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
  ctx.lineTo(20,240);
  ctx.lineTo(460,240);
  ctx.lineTo(480,280);
  ctx.lineTo(480,360);
  ctx.fill();
  ctx.closePath();

  // clock

  ctx.beginPath();
  ctx.strokeStyle = "#333"
  ctx.lineWidth = 35;
  ctx.fillStyle = "#222"
  ctx.moveTo(100 - 30, 130);
  ctx.lineTo(380+ 30, 130);
  ctx.lineTo(385 + 30, 132);
  ctx.lineTo(387 + 30, 137);
  ctx.lineTo(387+ 30, 280);
  ctx.lineTo(385+ 30, 285);
  ctx.lineTo(380+ 30, 287);
  ctx.lineTo(100 - 30, 287);
  ctx.lineTo(95 - 30, 285);
  ctx.lineTo(93 - 30, 280);
  ctx.lineTo(93 - 30, 137);
  ctx.lineTo(95 - 30, 132);
  ctx.lineTo(100 - 30, 130);
  ctx.lineTo(120 - 30,130);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = "#333";
  ctx.moveTo(80 - 30, 127);
  ctx.lineTo(140 - 30, 90);
  ctx.lineTo(340+ 30, 90);
  ctx.lineTo(400+ 30, 127);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  // display :D

  drawNumbers(75, h, true) ;
  drawNumbers(215, m, true);
  drawNumbers(355, s, false);

  // dots? 
  
  ctx.beginPath();
  ctx.arc(200, 225, 6, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(200, 195, 6, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(345, 235, 3, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(345, 220, 3, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fill();
  ctx.closePath();
   

  ctx.font = "17px Arial";
  ctx.fillStyle =  "#f00";
    
  if(session === "AM"){
  ctx.fillText("AM",360,170);
    ctx.fillStyle =  "#700";
  ctx.fillText("PM",360,190);
  }else{
    ctx.fillStyle =  "#700";
    ctx.fillText("AM",360,170);
    ctx.fillStyle =  "#f00";
    ctx.fillText("PM",360,190);
  }

ctx.fillStyle =  "#f00";
  t++;
}

function drawNumbers (xpos, numbers, ifNotSmall ) {
  
  let l1 = Math.floor(numbers/10);
  
    
  
  let l2 = numbers % 10;  // im a genius
  if(ifNotSmall){
  drSiNu(l1, xpos);
  drSiNu(l2, xpos+60);
   } else{
    drSisNu(l1, xpos);
    drSisNu(l2, xpos+30)
   }
  
} 
function drSiNu (n, x) {
  if (n !== 1 && n !== 4  ){
    
    ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15, 160);
  ctx.lineTo(x+35, 160);
  ctx.lineTo(x+40, 165);
  ctx.lineTo(x+35, 170);
  ctx.lineTo(x+15, 170);
  ctx.lineTo(x +10, 165);
  ctx.lineTo(x+15, 160);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// u
  } 
  if (n !== 1 && n !== 0 && n !== 7 ){
    ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15, 205);
  ctx.lineTo(x+35, 205);
  ctx.lineTo(x+40, 210);
  ctx.lineTo(x+35, 215);
  ctx.lineTo(x+15, 215);
  ctx.lineTo(x+10, 210);
  ctx.lineTo(x+15, 205);
  ctx.closePath();
  ctx.fill();
  ctx.stroke(); // m
  }
    if (n !== 1 && n !== 9 && n !== 7 && n !== 4 ){
      ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15, 250);
  ctx.lineTo(x+35, 250);
  ctx.lineTo(x+40, 255);
  ctx.lineTo(x+35, 260);
  ctx.lineTo(x+15, 260);
  ctx.lineTo(x +10, 255);
  ctx.lineTo(x+15, 250)
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// d
  }
    if (n !== 1 && n !== 2 && n !== 7 && n !== 3){
    ctx.beginPath();
    ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+0, 175);
  ctx.lineTo(x+0, 200);
  ctx.lineTo(x+5, 205);
  ctx.lineTo(x+10, 200);
  ctx.lineTo(x+10, 175);
  ctx.lineTo(x+5, 170);
  ctx.lineTo(x+0, 175);
  ctx.closePath();
  ctx.fill();
  ctx.stroke(); // ul
  }
      if (n !== 3 && n !== 4 && n !== 5 && n !== 7 && n !== 9 && n !== 1){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+0, 220);
  ctx.lineTo(x+0, 245);
  ctx.lineTo(x+5, 250);
  ctx.lineTo(x+10, 245);
  ctx.lineTo(x+10, 220);
  ctx.lineTo(x+5, 215);
  ctx.lineTo(x+0, 220)
  ctx.closePath();
  ctx.fill();
  ctx.stroke();//dl
  }
      if (n !== 5 && n !== 6){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+40, 175);
  ctx.lineTo(x+40, 200);
  ctx.lineTo(x+45, 205);
  ctx.lineTo(x+50, 200);
  ctx.lineTo(x+50, 175);
  ctx.lineTo(x+45, 170);
  ctx.lineTo(x+40, 175);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// ur mom
  }
      if (n !== 2 ){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+40, 220);
  ctx.lineTo(x+40, 245);
  ctx.lineTo(x+45, 250);
  ctx.lineTo(x+50, 245);
  ctx.lineTo(x+50, 220);
  ctx.lineTo(x+45, 215);
  ctx.lineTo(x+40, 220)
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// dr
  
  }
}

function drSisNu (n, x) {
  if (n !== 1 && n !== 4  ){
    
    ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15/2, (160-245)/2+245);
  ctx.lineTo(x+35/2, (160-245)/2+245);
  ctx.lineTo(x+40/2, (165-245)/2+245);
  ctx.lineTo(x+35/2, (170-245)/2+245);
  ctx.lineTo(x+15/2, (170-245)/2+245);
  ctx.lineTo(x +10/2, (165-245)/2+245);
  ctx.lineTo(x+15/2, (160-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// u
  } 
  if (n !== 1 && n !== 0 && n !== 7 ){
    ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15/2, (205-245)/2+245);
  ctx.lineTo(x+35/2, (205-245)/2+245);
  ctx.lineTo(x+40/2, (210-245)/2+245);
  ctx.lineTo(x+35/2, (215-245)/2+245);
  ctx.lineTo(x+15/2, (215-245)/2+245);
  ctx.lineTo(x+10/2, (210-245)/2+245);
  ctx.lineTo(x+15/2, (205-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke(); // m
  }
    if (n !== 1 && n !== 9 && n !== 7 && n !== 4 ){
      ctx.beginPath();
      ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+15/2, (250-245)/2+245);
  ctx.lineTo(x+35/2, (250-245)/2+245);
  ctx.lineTo(x+40/2, (255-245)/2+245);
  ctx.lineTo(x+35/2, (260-245)/2+245);
  ctx.lineTo(x+15/2, (260-245)/2+245);
  ctx.lineTo(x +10/2, (255-245)/2+245);
  ctx.lineTo(x+15/2, (250-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// d
  }
    if (n !== 1 && n !== 2 && n !== 7 && n !== 3){
    ctx.beginPath();
    ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+0/2, (175-245)/2+245);
  ctx.lineTo(x+0/2, (200-245)/2+245);
  ctx.lineTo(x+5/2, (205-245)/2+245);
  ctx.lineTo(x+10/2, (200-245)/2+245);
  ctx.lineTo(x+10/2, (175-245)/2+245);
  ctx.lineTo(x+5/2, (170-245)/2+245);
  ctx.lineTo(x+0/2, (175-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke(); // ul
  }
      if (n !== 3 && n !== 4 && n !== 5 && n !== 7 && n !== 9 && n !== 1){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+0/2, (220-245)/2+245);
  ctx.lineTo(x+0/2, (245-245)/2+245);
  ctx.lineTo(x+5/2, (250-245)/2+245);
  ctx.lineTo(x+10/2, (245-245)/2+245);
  ctx.lineTo(x+10/2, (220-245)/2+245);
  ctx.lineTo(x+5/2, (215-245)/2+245);
  ctx.lineTo(x+0/2, (220-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();//dl
  }
      if (n !== 5 && n !== 6){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+40/2, (175-245)/2+245);
  ctx.lineTo(x+40/2, (200-245)/2+245);
  ctx.lineTo(x+45/2, (205-245)/2+245);
  ctx.lineTo(x+50/2, (200-245)/2+245);
  ctx.lineTo(x+50/2, (175-245)/2+245);
  ctx.lineTo(x+45/2, (170-245)/2+245);
  ctx.lineTo(x+40/2, (175-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// ur mom
  }
      if (n !== 2 ){
    ctx.beginPath();
  ctx.strokeStyle = "#f00"
  ctx.fillStyle = "#f00"
  ctx.lineWidth = 1;
  ctx.moveTo(x+40/2, (220-245)/2+245);
  ctx.lineTo(x+40/2, (245-245)/2+245);
  ctx.lineTo(x+45/2, (250-245)/2+245);
  ctx.lineTo(x+50/2, (245-245)/2+245);
  ctx.lineTo(x+50/2, (220-245)/2+245);
  ctx.lineTo(x+45/2, (215-245)/2+245);
  ctx.lineTo(x+40/2, (220-245)/2+245);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();// dr
  
  }
}
var fs= false;
function fullscreen () {
  fs= !fs
}