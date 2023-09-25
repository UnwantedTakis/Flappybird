

function preload(){
  birdImg=loadImage("./assets/Bird.jpg")
} 
 
function setup(){
createCanvas(1550,675)
bird= createSprite(500,300)
bird.addImage ("bird",birdImg)
bird.scale=0.15

invisableGround=createSprite(width/2,height-20,width,20)

invisableGround.visible=true
}

function draw() {
background("green")
if(keyDown("space")){
bird.velocityY=-10
}

bird.velocityY=bird.velocityY+0.5
bird.collide(invisableGround)

drawSprites()


}

function addObstacle(){
  
}