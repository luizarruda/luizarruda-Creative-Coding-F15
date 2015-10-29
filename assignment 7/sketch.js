var weather;
var position;


function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork'+
   '&APPID=7bbbb47522848e8b9c26ba35c226c734';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(720, 400);
  
  position = createVector(width/2,height/2);
  println(weather.main);
}

function draw() {
  background(200);
  
  // get the humidity value out of the loaded JSON
  var humidity = weather.main.humidity;
  var pressure = weather.main.pressure;
  var temp = weather.main.temp;
  var temp_max = weather.main.temp_max;
  var temp_min = weather.main.temp_min;
  var sea_level= weather.main.sea_level;
  var sea_level_max = 1200;
  var windspeed=weather.wind.speed;
  
  
  
  //draw sea level
  fill("BLUE");
  rect(0,(sea_level/sea_level_max)*height/2,width,height);
  fill("WHITE");
  text("The sea level is " + floor(sea_level),20,(sea_level/sea_level_max)*(height/2) - 5);
  
  
 
  //draw text changing position with windspeed as a velocity
  
  position.add(windspeed/2,0);
  text("The wind speed is " + windspeed,position.x,30);
  
  if(position.x>width) position.x = 0;
  
  fill("YELLOW")
  ellipse(width/2,height/2,temp/2,temp/2);
  fill("BLACK");
  text("The temperature is " + floor(temp),(width/2-temp/5),height/2);

  
}