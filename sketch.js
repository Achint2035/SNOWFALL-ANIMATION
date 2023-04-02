var snowBg;
var snow;
var snowfall1, snowfall2, snowfall3, snowfall4, snowfall5, snowfall6;


function preload(){
  snowBg = loadImage("snow2.jpg");
  snow = loadAnimation("snow4.webp","snow5.webp");

}

function setup() {
  createCanvas(1000,600);
  snowfall1 = createSprite(500,300,20,20);
  snowfall1.addAnimation("s",snow);
  snowfall1.scale = 0.2;

  snowfall2 = createSprite(600,200,20,20);
  snowfall2.addAnimation("s",snow);
  snowfall2.scale = 0.2;

  snowfall3 = createSprite(800,400,20,20);
  snowfall3.addAnimation("s",snow);
  snowfall3.scale = 0.2;

  snowfall4 = createSprite(100,400,20,20);
  snowfall4.addAnimation("s",snow);
  snowfall4.scale = 0.2;

  snowfall5 = createSprite(300,400,20,20);
  snowfall5.addAnimation("s",snow);
  snowfall5.scale = 0.2;

  snowfall6 = createSprite(100,200,20,20);
  snowfall6.addAnimation("s",snow);
  snowfall6.scale = 0.2;

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowBg);  
  drawSprites();
}