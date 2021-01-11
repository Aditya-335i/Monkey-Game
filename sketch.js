
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground
var gameState = "play";
var bananaCount = 0;

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_stopped = loadImage("sprite_2.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  console.log("hi");
  
}



function setup() {

ground = createSprite(200,330,800,10);  
  
monkey = createSprite(50,300,10,10);  
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
bananaGroup = new Group;
stoneGroup = new Group;
  

}


function draw() {
  
  background("white");
  drawSprites();
  
  text("Survival Time: ", 120,10);
  
  text(score, 200, 10);
  
  text("Banana Count: ", 240, 10);
  
  text(bananaCount, 325,10);
  
  monkey.collide(ground);
  
  if(gameState == "play"){
    
    
    
     if(keyDown("space") && monkey.y == 294.3){
    monkey.velocityY = -15;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  
   if(World.frameCount%5 == 0){
    score = score + 1;
  } 
    
  ground.velocityX = -5;
  
  if(ground.x<0){
    ground.x = 200;
  }
  
  if(monkey.isTouching(bananaGroup)){
    bananaCount = bananaCount + 1;
    bananaGroup.destroyEach();
  }  
    
  createBanana();
  stone();
  
  if(stoneGroup.collide(monkey)){
    gameState = "end";
  }
} else {
    ground.velocityX = 0;
    monkey.addAnimation("stopped", monkey_stopped);
    monkey.changeAnimation("stopped", monkey_stopped);
    monkey.y = 300;
    bananaGroup.destroyEach();
    stoneGroup.destroyEach();
  
    text("Press Space to Play Again", 130,150)
    
  if(keyDown("space")){
    gameState = "play";
    
    score = 0;
    
    bananaCount = 0;
    
    monkey.addAnimation("running", monkey_running);
    monkey.changeAnimation("running", monkey_running);
  }
}
  
  console.log(gameState);
 
  
 

}

function createBanana () {
  if(World.frameCount%60 ==0){
    banana = createSprite(400,random(150,200),10,10);
    banana.scale = 0.1;
    banana.velocityX = -7;
    banana.addImage(bananaImage);
    banana.lifetime = 160;
    
    bananaGroup.add(banana);
  }
} 
  function stone () {
    if(World.frameCount%300 == 0){
      var stone = createSprite(400,300,10,10);
      stone.scale = 0.2;
      stone.velocityX = -10;
      stone.addImage(obstaceImage);
      stone.lifetime = 160;
      stoneGroup.add(stone);
    }
    
   
  }




