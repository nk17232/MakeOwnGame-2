const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;


var rover, roverImg;
var ground, groundImg;
var water, waterImg;
var alienClass1, alienClass1Img, alienClass2, alienClass2Img, alienClass3, alienClass3Img;
var fireballImg;
var heartImg;
var rockImg;
var laserImg;
var toolImg;
var points=0;
var waterCount=0;
var waterGroup;
var world;

 
function preload(){
roverImg=loadImage("rover.png");
groundImg=loadImage("marsBackground.png");
waterImg=loadImage("images/water.png");
alienClass1Img=loadImage("images/alienclass1.png");
alienClass2Img=loadImage("images/alienClass2.png");
alienClass3Img=loadImage("images/alienclass3.png");
fireballImg=loadImage("images/fireball.png");
heartImg=loadImage("images/heart.png");
rockImg=loadImage("images/rock.png");
laserImg=loadImage("images/laser.png");
toolImg=loadImage("images/tool.png");




}


function setup() {
  createCanvas(2500,800);
  rover= createSprite(200, 600, 50, 50);
  rover.addImage(roverImg);
  rover.scale=0.25;
  rover.velocityX=1;

  ground = createSprite(1000,650, 2000, 70);
  ground.visible=false;

  


  alienClass1=createSprite(500, 400, 20, 20);
  alienClass1.addImage(alienClass1Img);
  alienClass1.scale=0.3;

  waterGroup= new Group();
  
  engine = Engine.create(); 
  world = engine.world;


 
}

function draw() {
  background(groundImg);
  engine.update(engine);

 
  if(keyDown(UP_ARROW) && (rover.y>300)){
    rover.y-=5;
    console.log(rover.y);
  }

  if(keyDown(DOWN_ARROW) && (rover.y<650)){
    rover.y+=5;
  }

  if(keyDown(RIGHT_ARROW)){
    rover.velocityX=3.5;
  }
  
  if(keyDown(LEFT_ARROW)){
    rover.velocityX=1.5;
    rover.x-=5;
  }

  displayWater();
  
  
  if(waterGroup.isTouching(rover)){
    waterGroup.destroyEach();
    waterCount+=1;
  }

  

  drawSprites();
}

function displayWater(){
if(frameCount%70==0){
  

 
  waterX=Math.round(random(rover.x+50, 2250));
  waterY=Math.round(random(300, 650));
  console.log(waterX);
  console.log(waterY);

  water=new Water(waterX, waterY);



}

 

  
}