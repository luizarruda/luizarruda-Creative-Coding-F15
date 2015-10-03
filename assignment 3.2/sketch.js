function setup() {
  
  createCanvas (300,300);
}
function draw() {
  background(0); //color the background black
 fill(103,48,48); //color de rect below
  rect(0,0,300,50); //first brow rect
  fill(121,61,26);
 rect(115,100-mouseY,70,300);
 fill(216,153,68);
  rect(84,250-mouseX,30,50); //yellow rect 1
  rect(186,250-mouseX,30,50);
  fill(47,204,211);
 rect(4,249,74,2); //thin rect 1
  rect(222,249,74,2); //thin rect 2
  beginShape();//draw first brown trapezio
  fill(97,6,1);
  noStroke();
  vertex(4,300);
  vertex(75,300);
  vertex(78,250);
  vertex(4,250-mouseY);
  endShape();
  
  beginShape();//draw second brown trapezio
  var r = 5;
  var g = 36;
  var b = 40;
  
  stroke(r,g,b+mouseX);
  vertex(296,300-mouseY);
  vertex(225,300);
  vertex(222,250);
  vertex(296,250);
  endShape();
  
  
  beginShape();//draw pink1 trapezio
  fill(215,42,42);
  noStroke();
  vertex(4,247);
  vertex(79,247);
  vertex(88,105);
  vertex(4,105-mouseX);
  endShape();
  
  
  beginShape();//draw pink2 trapezio
  fill(215,42,42);
  noStroke();
  vertex(296,247);
  vertex(221,247);
  vertex(212,105-mouseY);
  vertex(296,105);
  endShape();
  
 }