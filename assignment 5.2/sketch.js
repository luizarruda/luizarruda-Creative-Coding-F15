/**
** Assignment 5
** Kevin Siwoff's clock edited
**/
var r = 150.0;
var angle = 0.0;
var x=0,y=0;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(25);
  translate(width/2, height/2);
  fill(x+50,y,100);
  ellipse(0,0,x/2,y/2);
  //quad(x/2,y/2,x/2,-y/2,-x/2,y/2,-x/2,-y/2);
  //triangle(x/2,y/2,-x/2,-y/2,10,20);
  angle = (second() / 59.0) * TWO_PI;
  println(angle);
  x = cos(angle)* r;
  y = sin(angle)* r;
  beginShape();
  fill(97,6,1);
  noStroke();
  vertex(x/3,y/3);
  vertex(-x/3,y/3);
  vertex(x/3,-y/3);
  //vertex(-x,-y);
  endShape();
  rect(180,30,x,y);
  rect(-180,30,x,y);
  stroke(255);
  
  //draw a line from the center of our screen and as long as our radius
  //line(0,0,x,y);
  
  //draw triangles in each quadrant of the clock
  if(angle<=((15 / 59.0)* TWO_PI)){
    fill(5);
  triangle(0,0,x,y,r,0);}
  
  
  if(angle>=((15 / 59.0)* TWO_PI) && angle<=((30 / 59.0)* TWO_PI)){
    fill(100);
  triangle(0,0,x,y,0,r);}
  
  if(angle>=((30 / 59.0)* TWO_PI) && angle<=((45 / 59.0)* TWO_PI)){
  fill(170);
  triangle(0,0,x,y,-r,0);}
  
  if(angle>=((45 / 59.0)* TWO_PI) && angle<=((59 / 59.0)* TWO_PI)){
  fill(211);
  triangle(0,0,x,y,0,-r);}
  
  //ellipse(x,y,10,10);
  
  
  //background(y);
  for (var i = 0; i < 50; i += 20) {
    bezier(x-(i/2.0), 40+i, x, 20, y, 300, 240-(i/16.0), 300+(i/8.0));
  

  
}
  
}
