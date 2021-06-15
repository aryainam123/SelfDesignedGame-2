var spaceImg,ISSImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;
var iss,spaceCraft;

function preload(){
  spaceImg = loadImage("images/spacebg.jpg");
  ISSImg = loadImage("images/iss.png");
  spaceCraftImg1 = loadImage("images/spacecraft1.png");
  spaceCraftImg2 = loadImage("images/spacecraft4.png");
  spaceCraftImg3 = loadImage("images/spacecraft3.png");
  spaceCraftImg4 = loadImage("images/spacecraft2.png");
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(random(200,600),350,50,50);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale = 0.15

  iss = createSprite(400,200,50,50);
  iss.addImage(ISSImg);
  iss.scale = 0.7;
}

function draw() {
  console.log(spaceCraft.x);
  console.log(spaceCraft.y);
  background(spaceImg); 

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x+1;
    spaceCraft.addImage(spaceCraftImg2);
  }

  else if(keyDown(LEFT_ARROW)){
    spaceCraft.x = spaceCraft.x-1;
    spaceCraft.addImage(spaceCraftImg3);
  }

  else if(keyDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraftImg4);
    //spaceCraft.y = spaceCraft.y+1
  }

  else{
    spaceCraft.addImage(spaceCraftImg1);
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y-1
  }

  if(spaceCraft.x === 355&&spaceCraft.y === 255){
    textSize(30);
    fill(255)
    text("Docking Sucessful!!",400,350);
  }
  drawSprites();
}
