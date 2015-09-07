void setup (){
  size (430,500);
}
float x=0;
float y=0;
float z=-100;
float w=-100;
void draw(){
  while (x<100){
  rect(x,0,2,500);
  x= x+3;
  }
  while (y<500){
    rect(110,y,100,2);
    y = y+3;
  }
  while (z<500){
  line(220,z,320,z+100);
  z = z+6;
}
  while (w<500){
    line(430,w,330,w+100);
    w = w+6;
}}