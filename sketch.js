var movingBlock, fixedBlock, sprite1, sprite2;


function setup() {
  createCanvas(800,400);
  fixedBlock = createSprite(400, 200, 50, 100);
  movingBlock = createSprite(400,200,50,50);
  movingBlock.shapeColor = "red";
  fixedBlock.shapeColor = "red";
  movingBlock.debug = true;
  fixedBlock.debug = true;
  sprite1 = createSprite(200, 50, 100, 100);
  sprite2 = createSprite(400, 50, 100, 100);
  sprite1.shapeColor = "red";
  sprite2.shapeColor = "red";
  sprite1.velocityX = 2;
  sprite2.velocityX = -2;
}

function draw() {
  background("white");
   movingBlock.x = World.mouseX;
   movingBlock.y = World.mouseY;
   isTouching(sprite2,sprite1);
   bounceOff(sprite1,sprite2);
  drawSprites();
}
