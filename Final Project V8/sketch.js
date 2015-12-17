/*
Final project Creative Coding proposal NYU: Luiz Arruda

Song visualization using Echo Nest API to generate a JSON file

Code reference: 
Jason Sigal http://therewasaguy.github.io/p5-music-viz/demos/08_echonestPitchSegment/
Jason Sigal https://github.com/therewasaguy/p5-music-viz/blob/master/demos/05a_fft_particle_system/sketch.js

*/
var song, mySound, tempo, canvas, echonestData, backgoundColor;
var notes = new Array(12);
var maxDiameter;
var rotation = 0;
var rotations,rotationIncrement, pitches, timbreT,pitchesP;
var p = 1000, q = 1000, x, y, r = 20;
var v1;
var a=0,X=0,Y=0;
var doOnce = true;
var num = 20;
var randColors =[];
var ang, incr, rad, mult, radSpiral,
xIn, yIn, x2, y2, x1, y1, sze,  r, theta;

//tree variables
var sze, ang, incr, gldR;

  // function preload() {
  //     mySound = loadSound('altjintro.mp3');
   // }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noStroke();
  
  //waveform
  
  
  
  backgoundColor = color(253,254,250, 30);

  colorMode(HSB, 255);
  
  //loading JSON file created by Echonest, I downloaded the JSON to my pc
  // loading music file
  loadJSON('altj.json', echonestData);
  
  
  //load music and play it
  mySound = createAudio('altjintro.mp3');
  
  //load music controls
  //mySound.showControls();
  //mySound.setVolume(0.6);
  mySound.play();
  
  // fast fourier transform - audio frenquencies - waveform
  fft = new p5.FFT();
  fft.setInput(mySound);
  
  maxDiameter = width;
  translate(width/2, height/2);

  rotations = [0, PI/60, -PI/60, PI/32, -PI/32, PI/18, PI/6, -PI/18, -PI/6, PI/12];
  rotationIncrement = rotations[0];

  // draw keys
  for (var i = 0; i < notes.length; i++) {
    var diameter = width/8;
    var angle = TWO_PI/notes.length;
    var hue = round( map(i, 0, notes.length, 0, 255) );
    var c = color(hue, 170, 250, 200);
    notes[i] = new Arc(i, diameter, angle, c);
    notes[i].draw();
  }
    
  //tree
  gldR = (sqrt(5)+1.0)/2.0;

}


function draw() {
  
  //println(pitchesP);
  background(backgoundColor);
  
  //setting rotations at certain points of the music
  if(tempo < 7 || tempo >13 && tempo <62  || tempo >112 ) {
   rotate(rotation += rotationIncrement);
  }
  
  
var spectrum = fft.analyze();  
var waveform = fft.waveform();
for (var i = 0; i< waveform.length; i++){
    var xwav = map(i, 0, waveform.length, 0, width);
    var ywav = map( waveform[i], -1, 1, 0, height);
   
 v1 = createVector(xwav,ywav);
 
 
  }
  
  //println(v1.y + "and "+v1.x);
   
  //getting time from the music
  tempo = mySound.time();
  

  for (var i = 0; i < notes.length; i++) {
    notes[i].draw(); 
  }
 
 
 
 //lines/circle/triangle
   strokeJoin(ROUND);
  rad =  width/2;
  r = 140;
  for (var i= 0; i < num; i++) {
    randColors[i]  =  color(random(255), random(255), random(255));
  }
  incr = 3;

}


//tree function
function branch(len) {
  if (len < 8) {stroke(random(0,255),random(0,255),random(0,255));}
  else if (len < 16) {stroke(random(0,255),random(0,255),random(0,255));}
  else if (len < 32) {stroke(random(0,255),random(0,255),random(0,255));}
  else if (len < 64) {stroke(random(0,255),random(0,255),random(0,255));}
   else if (len < 128) {stroke(random(0,255),random(0,255),random(0,255));}
  else { stroke(255, 220);}
 
  var sw = map(len, 4, sze, 1, 12);
  strokeWeight(sw);
  line(0, 0, 0, -len);
  translate(0, -len);
  len /=  gldR;
 
  if (len >= 4) {
    push();  
    rotate(ang);
    branch(len);      
    pop();
    
    push();
    rotate(-ang);
    branch(len);
    pop();
  }
}


function echonestData(data) {
   // song = data;

    funSegments(data.segments);

    funSections(data.bars);
    //mySound.play();
  }



function releaseNote() {
  for (var i = 0; i < notes.length; i++) {
    notes[i].releaseNote();
  }
}

function changeRotation(index) {
  rotationIncrement = rotations[index % rotations.length];
}


// schedule timeline events based on json data

function funSegments(segments) {

  for (var i = 0; i < segments.length; i++) {
    var seg = segments[i];
    if (seg.confidence > 0.01) {
      var startTime = seg.start;
      var endTime = seg.start + seg.duration;
       pitches = seg.pitches;
      var timbre = seg.timbre;
      mySound.addCue(startTime, triggerNote, pitches);
      mySound.addCue(startTime, triggerTimbre, timbre);
      mySound.addCue(endTime, releaseNote);

    }
  }
}

function funSections(sections) {
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var startTime = section.start;

    mySound.addCue(startTime, changeRotation, i);
  }
}

// callbacks from timeline events

function triggerNote(pitches) {
  var pitchThreshold = 0.5;
  for (var i = 0; i < notes.length; i++) {
    if (pitches[i] > pitchThreshold) {
      notes[i].triggerNote(pitches[i]);
      notes[i].triggerBeat();
      pitchesP = pitches[i];
    }
  }
}

  function triggerTimbre(timbre) {
  var pitchThreshold = 0.5;
  for (var i = 0; i < notes.length; i++) {
    if (timbre[i] > pitchThreshold) {
      notes[i].triggerNote(timbre[i]);
      notes[i].triggerBeat();
      timbreT = timbre[i];
     //println(timbre[i]);
    }
  }
}

// Arc class

var Arc = function(index, diameter, angle, c) {
  this.index = index;
  this.diameter = diameter;
  this.extraRad = 1;

  this.angle = angle;
  this.color = c;
  this.alpha = this.color.rgba[3];
  this.decayRate = 0.95;
}

Arc.prototype.triggerNote = function(val) {
  this.alpha = 255 * val;
  this.decayRate = 1 + val/25;
  this.color.rgba[3] = this.alpha;
}

Arc.prototype.releaseNote = function() {
  this.decayRate = 0.9;
}

Arc.prototype.triggerBeat = function() {
  this.extraRad = 100;
  this.radRate = 1.3;
}

Arc.prototype.draw = function() {
  this.alpha *= this.decayRate;
  this.extraRad *= this.radRate * this.decayRate;
  this.extraRad = constrain(this.extraRad, 0.01, maxDiameter);

  this.radRate *= 0.98;
  this.radRate = constrain(this.radRate, 0.9, 1.5);

  this.color.rgba[3] = this.alpha;
  fill(this.color);

  var d = this.diameter + this.extraRad;
  
  //triangle(this.index,this.angle,0,d*2,0,0);
  //quad(this.index,this.angle,d,d,222,0,111,111);
  //arc(0, 0, d, d, this.index*this.angle, (this.index*this.angle) + this.angle);
  if (tempo < 7) {
   
      ellipse(d, this.alpha, this.index * 100, 50);
     
      scale(0.6);

  }
  else if (tempo < 13) {
    ellipse(this.extraRad*10,this.angle*10,50,50);
    //quad(this.index,this.angle,d,d,222,0,111,111);
    
  }
  else if (tempo < 25.5) {
    ellipse(d, 0, this.index*100, this.angle*100);
  }
  
  else if (tempo<45){
    
  push();
  var r=10;
  var R=150;
  var angle1=0;
  var angle2=PI/4;
  
    r=timbreT*0.5;
  
  fill(0,10);
  stroke(0);
  frameRate(10);
  angle1+=0.02;
  angle2+=0.06;
  x1=floor(R*sin(angle1));
  y1=floor(R*cos(angle1));
  x2=floor(R*0.6*sin(angle2))+timbreT;
  y2=floor(R*0.6*cos(angle2))+timbreT;
   
  ellipse(x1,y1,r,r);
  ellipse(x2,y2,r*0.7,r*0.7);
  ellipse(-x1,-y1,r,r);
  ellipse(-x2,-y2,r*0.7,r*0.7);
  ellipse(x1,-y1,r,r);
  ellipse(x2,-y2,r*0.7,r*0.7);
  ellipse(-x1,y1,r,r);
  ellipse(-x2,y2,r*0.7,r*0.7);
   
  ellipse(y1,x1,r,r);
  ellipse(y2,x2,r*0.7,r*0.7);
  ellipse(-y1,-x1,r,r);
  ellipse(-y2,-x2,r*0.7,r*0.7);
  ellipse(y1,-x1,r,r);
  ellipse(y2,-x2,r*0.7,r*0.7);
  ellipse(-y1,x1,r,r);
  ellipse(-y2,x2,r*0.7,r*0.7);
   
  stroke(255);
  strokeWeight(2);
  line(x1,y1,x2,y2);
  line(-x1,-y1,-x2,-y2);
  line(x1,-y1,x2,-y2);
  line(-x1,y1,-x2,y2);
   
  line(y1,x1,y2,x2);
  line(-y1,-x1,-y2,-x2);
  line(y1,-x1,y2,-x2);
  line(-y1,x1,-y2,x2);
  pop();
  }
  
  else if (tempo < 67) {
 push();
  var r=10;
  var R=150;
  var angle1=0;
  var angle2=PI/4;
  
    r=timbreT*0.5;


  fill(0,10);
  stroke(this.color);
  frameRate(10);
  angle1+=0.02;
  angle2+=0.06;
  x1=floor(R*sin(angle1));
  y1=floor(R*cos(angle1));
  x2=floor(R*0.6*sin(angle2))*timbreT;
  y2=floor(R*0.6*cos(angle2))*timbreT;
   
  ellipse(x1,y1,r,r);
  ellipse(x2,y2,r*0.7,r*0.7);
  ellipse(-x1,-y1,r,r);
  ellipse(-x2,-y2,r*0.7,r*0.7);
  ellipse(x1,-y1,r,r);
  ellipse(x2,-y2,r*0.7,r*0.7);
  ellipse(-x1,y1,r,r);
  ellipse(-x2,y2,r*0.7,r*0.7);
   
  ellipse(y1,x1,r,r);
  ellipse(y2,x2,r*0.7,r*0.7);
  ellipse(-y1,-x1,r,r);
  ellipse(-y2,-x2,r*0.7,r*0.7);
  ellipse(y1,-x1,r,r);
  ellipse(y2,-x2,r*0.7,r*0.7);
  ellipse(-y1,x1,r,r);
  ellipse(-y2,x2,r*0.7,r*0.7);
   
  stroke(255);
  strokeWeight(2);
  line(x1,y1,x2,y2);
  line(-x1,-y1,-x2,-y2);
  line(x1,-y1,x2,-y2);
  line(-x1,y1,-x2,y2);
   
  line(y1,x1,y2,x2);
  line(-y1,-x1,-y2,-x2);
  line(y1,-x1,y2,-x2);
  line(-y1,x1,-y2,x2);
  pop(); 
}
  
   /*else if (tempo < 62) {
     scale(0.9);
    stroke (255);
  strokeWeight (3);
   
  noFill();
  ellipse (d,this.index, 100,100);
   
  fill (this.color);
  ellipse (d,this.index, 100,100);
   
  fill (40, 80,this.color);
  ellipse (d,this.index, 100,100);
   
  noStroke();
  fill (255,237,188);
  ellipse (d,100, 100,100);
   
  stroke(255);
  fill (167,82,101);
  ellipse (d,100, 100,100);
   
  fill (this.color);
  ellipse (d,100, 100,100);
   
  fill (this.color, 120);
  ellipse (d,100, 100,100);
}*/

//black flower, points and rotating
else if(tempo<81){
  push();
     fill(0, 10);
     scale(pitchesP);

  for (var i = 0; i < 360; i+=3) {
 
    var angle = cos(i+a)*60*(1+100*timbreT/250);
    // Locations of circles. 
    var x = sin(radians(i))*(150+angle);
    var y = cos(radians(i))*(150+angle);
 
 
 
 
    fill(0, 0, 0, 190);
    ellipse(0,0,v1.y-200,v1.y-200);
 
    //the dots of flower
 
    ellipse( x, y, x/35, y/35);
  }
  a+=0.05;
  pop();
  }


else if (tempo<112){
  
//schedule lyrics
mySound.addCue(81.71, lyrics, "Shit");
mySound.addCue(82.01, lyrics, "them");
mySound.addCue(82.45, lyrics, "all");
mySound.addCue(82.81, lyrics, "festival");
mySound.addCue(83.31, lyrics, "laugh");
mySound.addCue(83.75, lyrics, "at the beautiful");
mySound.addCue(86.00, lyrics, "It's just a nod");
mySound.addCue(87.00, lyrics, "to the canon");
mySound.addCue(88.28, lyrics, "Simple man");
mySound.addCue(89.07, lyrics, "Stan");
mySound.addCue(89.78, lyrics, "can't stand");
mySound.addCue(90.44, lyrics, "up on");
mySound.addCue(91.19, lyrics, "the beautiful");
mySound.addCue(92.74, lyrics, "It's just");
mySound.addCue(93.57, lyrics, "a nod");
mySound.addCue(94.05, lyrics, "to the canon");
mySound.addCue(94.99, lyrics, "Stickle brick");
mySound.addCue(95.51, lyrics, "tickle quick");
mySound.addCue(96.45, lyrics, "laugh at");
mySound.addCue(97.34, lyrics, "the beautiful");
mySound.addCue(99.49, lyrics, "It's just");
mySound.addCue(100.11, lyrics, "a nod");
mySound.addCue(100.57, lyrics, "to the canon");
mySound.addCue(101.25, lyrics, "Hustle over");
mySound.addCue(102.26, lyrics, "hot muscle shower");
mySound.addCue(103.47, lyrics, "twitch off the beautiful");
mySound.addCue(106.27, lyrics, "It's just");
mySound.addCue(106.88, lyrics, "a nod");
mySound.addCue(107.00, lyrics, "to");
mySound.addCue(107.27, lyrics, "the");
mySound.addCue(107.63, lyrics, "canon");
mySound.addCue(107.88, lyrics, "now");
mySound.addCue(108.0, lyrics, "Um");
mySound.addCue(109.00, lyrics, "Dois");
mySound.addCue(110.00, lyrics, "Três");

 
      }
      

// tree with random colors      
  else if (tempo<152){
    
  
    push();
  frameRate(5);
  scale(2*pitchesP);
  //background(floor(timbreT*10+random(0,50)));
  sze = map(random(0,5), 0, width, 60, 550);
    incr += .1;
     ang = v1.y+TWO_PI/10;
  //scale(pitchesP);
  
   //rotate(rotation += rotationIncrement);
    //translate(0, 0+50-(sze*2));
    for (var i = 0; i<5; i++) {
      push();
      rotate(i * TWO_PI/5);
      branch(sze);
      pop();
    }
    
    
  pop();

      }
}

function lyrics(val) {
 push();
 
  fill(floor(random(0,255)), floor(random(0,255)),floor(random(0,255)));
textSize(48);
 text(val,v1.y-width/4,(v1.y/2)-height/4);
 pop();
}
