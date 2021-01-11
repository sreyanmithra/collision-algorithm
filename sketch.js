var movingRect,fixedRect;

function setup(){

  createCanvas(400,400)

  movingRect=createSprite(100,200,50,40)
  movingRect.shapeColor="black"

  fixedRect=createSprite(300,200,50,40)
  fixedRect.shapeColor="black"
}

function draw(){

  background("white")

  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
    
    }
   else {
   
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
           
   }

  drawSprites()
}