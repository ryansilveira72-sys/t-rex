//variáveis 
let trex;
let trexRunning;
let ground;

//pré carregamentos
function preload(){
  trexRunning = loadAnimation ("trex1.png","trex2.png","trex3.png");
}
  

//configuração inicial
function setup(){
createCanvas(600,200);
trex = createSprite (50,160,20,50); 
  trex.addAnimation ("running",trexRunning);
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200,180,400,20);
  
}
//desenha os paranaue tudo
function draw(){
  background ("white");

  if(keyDown("space")){ 
    trex.velocityY = -10
  }

  trex.velocityY += 0.8;
  
  drawSprites ();
}
