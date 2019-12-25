var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 20);
  fixedRect = createSprite(400,100,50,50);
  object = createSprite(400,400,40,50);
  object.velocityY = -2;
  fixedRect.velocityY = 2;

  movingRect.shapeColor = "turquoise";
  fixedRect.shapeColor = "turquoise";
  movingRect.debug = true;
  fixedRect.debug  = true;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "midnightblue";
    fixedRect.shapeColor = "midnightblue";
  } 
  else{
    movingRect.shapeColor = "turquoise";
    fixedRect.shapeColor = "turquoise";
  }*/
  bounceOff(object,fixedRect);
``
  drawSprites();
}
