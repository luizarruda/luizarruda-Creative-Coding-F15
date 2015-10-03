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
  fill(x,y,0);
  ellipse(0,0,x/2,y/2);
  
  angle = (second() / 59.0) * TWO_PI;
  println(angle);
  x = cos(angle)* r;
  y = sin(angle)* r;
  
  stroke(255);
  
  //draw a line from the center of our screen and as long as our radius
  line(0,0,x,y);
  
  //draw triangles in each quadrant of the clock
  if(angle<((15 / 59.0)* TWO_PI)){
    fill(5);
  triangle(0,0,x,y,r,0);}
  
  
  if(angle>((15 / 59.0)* TWO_PI) && angle<((30 / 59.0)* TWO_PI)){
    fill(100);
  triangle(0,0,x,y,0,r);}
  
  if(angle>((30 / 59.0)* TWO_PI) && angle<((45 / 59.0)* TWO_PI)){
  fill(170);
  triangle(0,0,x,y,-r,0);}
  
  if(angle>((45 / 59.0)* TWO_PI) && angle<((59 / 59.0)* TWO_PI)){
  fill(211);
  triangle(0,0,x,y,0,-r);}
  
  //ellipse(x,y,10,10);
  
  
}
