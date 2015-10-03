function setup() {
    createCanvas (500,500);
   
}

function draw() {
  var x = 0;
  var y = 0; 
    //fill (97,6,1);
    //rotate(0.5);
    //rect(245,300,5,100);
    //rect(255,300,5,50);
  noFill();
  line(0,325,500,325);
  //curve(250,325,0,300,300,320,500,315);
beginShape(QUADS);
noStroke();
fill (1);
vertex(230, 150);
vertex(230, 325);
vertex(240, 325);
vertex(240, 150);

vertex(300, 200);
vertex(230, 275);
vertex(240, 275);
vertex(310, 200);

vertex(140, 190);
vertex(230, 255);
vertex(240, 255);
vertex(150, 190);

vertex(230, 190);
vertex(190, 125);
vertex(200, 125);
vertex(240, 190);

vertex(230, 180);
vertex(270, 105);
vertex(280, 105);
vertex(240, 180);
endShape();
//for (var i = 150; i <= 450; i= i+10) {
  //var r = 0;
  //var noiseR=noise(r,100,150);
  //r+=0.01;
  //noiseR = random(50,110);
//print(noiseR);
//stroke(0);
//line(275,110,i,noiseR);
randomSeed(0);
for (var i=150; i < 450; i+=6) {
  var r = random(20, 115);
  stroke(1);
  line(270, 110, i, r);
}
randomSeed(0);
for (var j=50; j < 250; j+=7) {
  var k = random(10, 115);
  stroke(1);
  line(200, 125, j, k);
}

randomSeed(0);
for (var j=0; j < 500; j+=10) {
  var k = random(10, 115);
  stroke(1);
  line(235, 150, j, k);
}

randomSeed(0);
for (var j=250; j < 500; j+=10) {
  var k = random(120, 215);
  stroke(1);
  line(305, 205, j, k);
}
randomSeed(0);
for (var j=0; j < 250; j+=10) {
  var k = random(120, 215);
  stroke(1);
  line(145, 195, j, k);
}
//noFill();
//beginShape();
//for (var j=0; j < 450; j+=20) {
//  var k = random(350, 500);
//curveVertex(240,  325);
//curveVertex(j,  k);
//(j,  k);
//curveVertex(j+10,  340);
//curveVertex(32, 100);
//curveVertex(32, 100);
//endShape();
//}
}