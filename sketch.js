var bg;
var boy,boyImg;
var snow,snowImg;

function preload(){
bg = loadImage("snow1.jpg");
boyImg = loadImage("Boy1.png");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
 boy = createSprite(600, 200, 50, 50);
 boy.addImage(boyImg);

}

function draw() {
  background(bg);  
  text("Use Arrow Keys To Control The Boy",400,25);

  if(frameCount % 10 === 0){
   
    snow = createSprite(random(10,800),0);
    snow.addImage(snowImg);
    snow.scale=0.1;
    snow.velocityY = 5;
  }

  drawSprites();
}
function keyPressed(){

  if(keyCode === LEFT_ARROW){

    boy.x = boy .x-10;
  }
  if(keyCode === RIGHT_ARROW){
  
    boy.x = boy .x+10;
  }
  if(keyCode === UP_ARROW){

    boy.scale = boy .scale-0.1;
  }
  if(keyCode === DOWN_ARROW){

    boy.scale = boy .scale+0.1;
  }

}