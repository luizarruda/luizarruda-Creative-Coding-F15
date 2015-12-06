//code by:
// https://github.com/Jared-Sprague
var spriteX;
var bgImg;
var x;
var bg;

function setup() {
  frameRate(25);
  bg = createCanvas(700, 400);
  frameRate(7);
  spriteX = loadImage('image/guy.png');
  bgImg = loadImage('image/bg.png');
  x=0;
}

var sX = 0, sY = 0;

function draw() {
  clear();
  image(bgImg);

  // Animate man running
  
  image(spriteX, sX, sY, 165, 294, x, 100,165, 294);
  sX += 165;
  if (sX > 1300) {
    sX = 0;
    sY += 294;
    if (sY >1455) {
      sY = 0;
    }
  }
  
 
     x = x+10;
     
    //Canvas end, restart
     if (x===width){
       x=0;
       sX=0;
       sY=0;
     }
  
  fill('BLACK');
  rect(370,height,20,-70);
  
  if(x>250 && x<350){
    textSize(24);
    fill(255, 0, 0);
     text("JUMP!!!",300,100);
  }
  else{
  textSize(16);
  text("Run Forrest, Run!!!",300,100);}

 //save(bg,"frame-"+x+".png");
}