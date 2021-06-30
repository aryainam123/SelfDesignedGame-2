var seaImg1,seaImg2,scrollImg,startImg,levelsImg;
var level1Img,level2Img,level3Img,level4Img,level5Img,levelLockImg;
var sea,scroll,start;
var level1,level2,level3,level4,level5;
var gameState = "Start";

function preload(){
  seaImg1 = loadImage("images/seaImg1.jpg");
  seaImg2 = loadImage("images/seaImg2.webp");
  scrollImg = loadImage("images/scroll.png");
  startImg = loadImage("images/start.png");
  level1Img = loadImage("images/level1.png");
  level2Img = loadImage("images/level2.png");
  level3Img = loadImage("images/level3.png");
  level4Img = loadImage("images/level4.png");
  level5Img = loadImage("images/level5.png");
  levelLockImg = loadImage("images/levellock.png");
  levelsImg = loadImage("images/levelsImg.png");
}

function setup(){
  createCanvas(800,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg1);
  sea.scale = 3;

  scroll  = createSprite(400,200);
  scroll.addImage(scrollImg);
  scroll.scale = 0.8;

  start = createSprite(500,360);
  start.addImage(startImg);

  level1 = createSprite(200,200);
    level1.addImage(level1Img);
    level2 = createSprite(300,200);
    level2.addImage(levelLockImg);
    level3 = createSprite(400,200);
    level3.addImage(levelLockImg);
    level4 = createSprite(500,200);
    level4.addImage(levelLockImg);
    level5 = createSprite(600,200);
    level5.addImage(levelLockImg);

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;



}

function draw(){
  background(225);
  console.log(gameState);

  if(mousePressedOver(start)&&gameState === "Start"){
    gameState = "Middle"
    scroll.visible = false;
    start.visible = false;
    sea.addImage(seaImg2);
    sea.scale = 2

    level1.visible = true;
    level2.visible = true;
    level3.visible = true;
    level4.visible = true;
    level5.visible = true;    
  }

  if(mousePressedOver(level1)&&gameState === "Middle"){
    gameState === "Level1"
    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;

    island = createSprite(400,200);
    island.addImage(levelsImg);
    island.scale = 9;
  }
   drawSprites();
}