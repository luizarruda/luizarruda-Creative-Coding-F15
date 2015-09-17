void setup (){
  size (300,300);
}
void draw(){
  background(0); //color the background black
 fill(#673030); //color de rect below
  rect(0,0,300,50); //first brow rect
  fill(#793D1A);
 rect(115,100,70,300);
 fill(#D89944);
  rect(84,250,30,50); //yellow rect 1
  rect(186,250,30,50);
  fill(#2FCCD3);
 rect(4,249,74,2); //thin rect 1
  rect(222,249,74,2); //thin rect 2
  beginShape();//draw first brown trapezio
  fill(#610601);
  noStroke();
  vertex(4,300);
  vertex(75,300);
  vertex(78,250);
  vertex(4,250);
  endShape();
  
  beginShape();//draw second brown trapezio
  float r = 5;
  float g = 36;
  float b = 40;
  
  stroke(r,g,b);
  vertex(296,300);
  vertex(225,300);
  vertex(222,250);
  vertex(296,250);
  endShape();
  
  
  beginShape();//draw pink1 trapezio
  fill(#D32F6E);
  noStroke();
  vertex(4,247);
  vertex(79,247);
  vertex(88,105);
  vertex(4,105);
  endShape();
  
  
  beginShape();//draw pink2 trapezio
  fill(#D32F6E);
  noStroke();
  vertex(296,247);
  vertex(221,247);
  vertex(212,105);
  vertex(296,105);
  endShape();
  
 }