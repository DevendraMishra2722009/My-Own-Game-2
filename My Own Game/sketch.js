var ninja 
var ninjaImage 
var zombie
var zombieGroup


function preload(){
  backgroundImage=loadImage("Images/BG 2.jpg")
  ninjaImage =loadAnimation("Images/Ninja 1.1.png","Images/Ninja 1.2.png","Images/Ninja 1.3.png","Images/Ninja 1.4.png","Images/Ninja 1.5.png")
  zombieImage =loadAnimation("Images/Zombie 1.1.1.png","Images/Zombie 1.2.2.png","Images/Zombie 1.3.3.png","Images/Zombie 1.4.4.png","Images/Zombie 1.5.5.png")
  swordImage =loadAnimation("Images/")
}



function setup() {
  createCanvas(1500,700);
  ninja =createSprite(200,500,100,50)
  ninja.addAnimation("ninja",ninjaImage)
  ninja.scale=2.0
  zombieGroup=new Group()
  
}

function draw() {
  background(backgroundImage);  
  zombies()
  if(keyDown(UP_ARROW)){
ninja.y=ninja.y-4
  }
  if(keyDown(DOWN_ARROW)){
    ninja.y=ninja.y+4
      }
  if(keyDown(LEFT_ARROW)){
    ninja.x=ninja.x-4
  }    
  if(keyDown(RIGHT_ARROW)){
    ninja.x=ninja.x+4
  }
   if(ninja.isTouching(zombieGroup)&&keyDown("space")){
  zombieGroup[0].destroy()

   }
  drawSprites();
}
function zombies(){
  if(frameCount%200===0){
    zombie =createSprite(random(1000,1400),random(100,600),200,50)
    zombie.addAnimation("zombie",zombieImage)
    zombie.scale=1.5
    zombie.velocityX=-2
    zombieGroup.add(zombie)
  }
 

}