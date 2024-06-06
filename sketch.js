let springFlower;
let summerFlower;
let fallFlower;
let winterFlower;

function preload(){
  // images for the seasons flowers
  springFlower = loadImage('springFlower.webp');
  summerFlower = loadImage('summerFlower.png')
  fallFlower = loadImage('fallFlower.png');
  winterFlower = loadImage('winterFlower.avif');
}

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  makeFlowerWall(17, 'Winter');
 
}

//function takes in two parameters, number of flowers, and season
function makeFlowerWall(numFlower, season){

  
  
  for(i=0; i<numFlower; i++){
    if(season === 'Spring'){
      image(springFlower, random(width), random(200, 300), 20, 20);
    } else if(season === 'Summer'){
      image(summerFlower, random(width), random(200, 300), 20, 20);
    } else if (season === 'Fall'){
      image(fallFlower, random(width), random(200, 300), 20, 20);
    } else if(season==='Winter'){
      image(winterFlower, random(width), random(200, 300), 20, 20);
    } 
  }

}


