var myCollection = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(1,256));
  for (var i=0; i<5; i++){
myCollection[i]  = random (1,5);

myCollection.push(3);
myCollection.oush(100.5);
  }
  println(myCollection);
}