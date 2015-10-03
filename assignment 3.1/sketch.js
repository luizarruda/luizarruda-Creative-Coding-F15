

function setup (){
  createCanvas (430,500);
  
   // Create an Audio input
  input = new p5.AudioIn();

  input.start();
}
var x=0;
var y=0;
var z=-100;
var w=-100;
 
function draw(){
  //background(mouseX,mouseY,0);
// Get the overall volume (between 0 and 1.0)
  var volume = input.getLevel(0);
println(volume);
  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  var threshold = 0.1;
  if (volume > threshold) {
  while (x<100){
  stroke(40);
  rect(x,0,2,500);
  x= x+3;
  }}
  while (y<500){
    rect(110,y,100,2+mouseX);
    y = y+3;
  }
  if (volume > threshold) {
  while (z<500){
  line(220,z,320,z+100);
  z = z+6;
}}
  while (w<500){
    line(430,w,330,w+100);
    w = w+6;
}}