//declare our global vars
let springFlower;
let summerFlower;
let fallFlower;
let winterFlower;
let RskyValue = 240;
let GskyValue = 210;
let BskyValue = 130;
let f = 0;
let r = 240;
let g = 210;
let b = 130;
let numFlower = 40;
let seasonCounter = 1;

//maaaaaan i said NO CLASSES only GLOBAL VARIABLES

function preload(){
  // pre-load our assets 
  springFlower = loadImage('springFlower.png');
  summerFlower = loadImage('summerFlower.png')
  fallFlower = loadImage('fallFlower.png');
  winterFlower = loadImage('winterFlower.png');
  grass = loadImage('grass.png');
  hills = loadImage('hills.png');
}

function setup() {
  createCanvas(400, 400);
  background(255);
  frameRate(1);
}

function draw() {
  handleSky();
  makeFlowerWall();
}


function makeFlowerWall() {
  
  if (f <= 0) {
  image(hills, 0, 128, 450, 248);
  image(grass, 0, 227, 400, 173);
  stroke(255, 248, 196);
  fill(255, 237, 99);
  circle(200, 50, 50);
    
  } //it functions, could we really ask for more?
  
  for(i=0; i<numFlower; i++){
    if (seasonCounter == 1) {
      this.season = "spring";
        if(f <= 0) {
      image(springFlower, random(width),random(340,390),25,25);
      image(springFlower, random(width), random(210,330),10,10);
        }
    } else if (seasonCounter == 2) {
      season = "summer";
      image(summerFlower, random(width),random(340,390),25,25);
      image(summerFlower, random(width), random(210,330),10,10);
      
    } else if (seasonCounter == 3) {
      season = "fall";
      image(fallFlower, random(width),random(340,390),25,25);
      image(fallFlower, random(width), random(210,330),10,10);
      
    } else if (seasonCounter == 4) {
      season = "winter";
        image(winterFlower, random(width),random(340,390),25,25);
        image(winterFlower, random(width), random(210,330),10,10);
    }
  }
} 


function handleSky () {
  
  if (r == RskyValue) {
  } else {
    r = r > RskyValue ? r - 5 : r + 5;
  }
  if (g == GskyValue) {
  } else {
    g = g > GskyValue ? g - 5 : g + 5;
  }
  if (b == BskyValue) {
    b = b > BskyValue ? b - 5 : b + 5;
  }

  background(r,g,b);
  print("goal:",RskyValue, GskyValue, BskyValue, "current sky values:",r,g,b);
  return { r, g, b };
}



//handle button presses:

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('seasonButton');

  //because this is the world's worst setup possible for what we are trying to do, I linked the values that change per season to the button presses lol
  
    button.addEventListener('click', () => {
      seasonCounter++;
        if (seasonCounter > 4) {
          seasonCounter = 1;
        }
        //assigning seasonal differences and stuff:
      if (seasonCounter == 1) { //summer
        numFlower = 45;
        RskyValue = 240;
        GskyValue = 210;
        BskyValue = 130;
      } else if (seasonCounter == 2) { //spring
        numFlower = 30;
        RskyValue = 135;
        GskyValue = 240;
        BskyValue = 240;
      } else if (seasonCounter == 3) { //fall
        numFlower = 20;
        RskyValue = 160;
        GskyValue = 200;
        BskyValue = 160;
      } else if (seasonCounter == 4) { //winter
        numFlower = 12;
        RskyValue = 210;
        GskyValue = 220;
        BskyValue = 240;
      }
      
      print(seasonCounter);
    });
});


