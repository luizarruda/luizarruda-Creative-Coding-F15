// DOM using same image
var bg;
var y = 0;

function setup() {

  bg = loadImage("assets/mm.png");
  createCanvas(788, 722);
}

function draw() {
  background(150);
 image(bg,10,10); 
  filter('GRAY'); //change image with filter
  tint(255, 127);
  image(bg,200,150); 
  
  tint(255, 250); // image with transparency
  image(bg,400,250); 
  
 
  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}
