
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, groundImage;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation( "sprite_0.png", "sprite_1.png",  "sprite_2.png"," sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
}



function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(60, 230,50,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(600,280,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey.setCollider("rectangle",0,0,450,monkey.height);
  
  
}


function draw() {
  background("white");
  
  if (ground.x < 100){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y > 210) {
        monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time - "+survivalTime,100,40);
  
  if(bananaGroup.isTouching(monkey)){
     bananaGroup.destroyEach();
     }
  
  
  
  
  drawSprites();
  
  food();
  rock();
}

function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(600,100,50,50);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.11;
    banana.velocityX = -10;
    banana.lifetime = 70;
    bananaGroup.add(banana);
  }
}

function rock(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(600,250,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -10;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle)
  }
}







