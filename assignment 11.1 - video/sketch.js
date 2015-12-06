/*
 * @name Video Cues
 * @description <p>Load a video and create a DOM element for it to play inside</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var space;
var bgColor;
var rot;
var rotX;
var fillColor;
var colorX;
var words;
var wordsX;
var positionX;
var positionY;
var letters;
var lettersX;
var bg;
function setup() {
  
  bgColor = color(255,255,255);
  rot = [PI/4,PI,PI/2,3*PI/2,PI/8];
  rotX = 0;
  
  fillColor = [color(255,0,0),color(0,255,0),color(0,0,255)];
  colorX = 0;
  
  words = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount",  "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as",  "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"];
  wordsX = 0;
  
  
  letters = ["a","b","c","d","e"];
  lettersX = 0;
  
  positionX = 100;
  positionY = 100;
  
  bg = createCanvas(640,480);
  
  
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
  space.showControls();
  //a centered video element
  space.position(width+5,0);

 
  
}
function draw(){
  background(bgColor);

 
 
  
 //change the color of what is being draw every second until the end of the video
 for(x=0;x<floor(space.duration());x++){
  space.addCue(x, changeFillColor,floor(random(fillColor.length)));
 }
 
 for(x=0;x<floor(space.duration());x++){
  space.addCue(x, randomWord,floor(random(words.length)));
 }

 for(x=0;x<floor(space.duration());x++){
  space.addCue(x, changeRotation, floor(random(rot.length)));
  }
 

  background(255);
  space.loadPixels();
  fill(fillColor[colorX]);
  for (var y=0; y<height; y+=4){
    for(var x=0; x<width; x+=8){
      var offset= ((y*width)+x)*8;
      var sizeVal= space.pixels[offset]/32;

      textSize(floor(sizeVal));
      text(letters[floor(random(letters.length))],x,y);
      //rect(x,y,sizeVal,sizeVal);
    }
  }
  
  println(letters[floor(random(letters.length))]);
  push();
  rotate(rot[rotX]);
  fill('BLACK');
  textSize(floor(wordsX/2));
  text(words[wordsX+5]+" " + words[wordsX] + " and " + words[wordsX+50], positionX,positionY);
  pop();
  
  // save(bg,"frame-"+floor(space.time())+".png");
 
}

function changeRotation(newAngle){
  rotX = newAngle;
  
}
function changeFillColor(newColor){
  colorX = newColor;
}

function randomWord(newWord){
  wordsX = newWord;
  positionX = floor(random(0,300));
  positionY = floor(random(0,400));
  
}


