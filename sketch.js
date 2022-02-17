var ball;
var box;



function setup() {
  createCanvas(1200, 800);
  ball = createSprite(600,400,50,50);
 
  box = createSprite(300,150, 100, 140);
}

function draw() {
  background(18,65,44); //"red" || 0-255 || (r,g,b)

  //moving left
  if(keyIsDown(LEFT_ARROW)){
  box.x=box.x-2
  }

//moving right

 if(keyIsDown(RIGHT_ARROW)){
 box.x=box.x+2
 }
 //moving up

 if(keyIsDown(UP_ARROW)){
   box.y=box.y-2
 }
 if(keyIsDown(DOWN_ARROW)){
   box.y += 2
 }
 background("green")

  drawSprites();
}