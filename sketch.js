//T-Rex 
let trex;
let trexRunning;

//Chão
let ground;
let groundImage;
let invisibleGround;

//Nuvens
let cloud;
let cloudImage;
let cloudsGroup;

//obstáculos
let obstacle;
let obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
let obstaclesGroup;


//pré carregamentos
function preload(){
  trexRunning = loadAnimation ("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
}
  

//configuração inicial
function setup(){
  createCanvas(600,200);

  //sprite do T-Rex
  trex = createSprite (50,160,20,50); 
  trex.addAnimation ("running",trexRunning);
  trex.scale = 0.5;
  trex.x = 50;

  //sprite do Chão
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
  //chão invisível
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
}

//desenha os paranaue tudo
function draw(){
  background ("white");

  //pulo
  if(keyDown("space"))&& trex.y >= 100 { 
    trex.velocityY = -10;
  }

  //gravidade
  trex.velocityY += 0.8;

  //colisão com chão
  trex.collide(invisibleGround);

  //movimento do chão
  ground.velocityX = -2;

  //reconfiguração do chão
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  spawnClouds();
spawnObstacles();

  

  
  drawSprites();
}
    
  
  


function spawnClouds(){
  if(frameCount % 60 === 0){
      cloud = createSprite(600, 100, 40, 10);
      cloud.velocityX = -3;
    cloud.addImage(cloudImage);
    cloud.scale = 0.4;
    cloud.y = Math.round (random(10,60));
   cloud.depth = trex.depth;
    trex.depth +1;
    cloud.lifetime = 600/3;
  }
}

function spawnObstacles(){
if(frameCount % 60 === 0){
obstacle = createSprite(600,165,10,40);
  obstacle.velocityX = -6;
  
  
}
  
  
}
