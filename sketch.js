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

//pré carregamentos
function preload(){
  trexRunning = loadAnimation ("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
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
  
  drawSprites ();
}

function spawnClouds(){
  if(frameCount % 60 === 0){
      cloud = createSprite(600, 100, 40, 10);
      cloud.velocityX = -3;
  }
}
  
