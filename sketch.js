var play =1;
var end = 0;
var gameState = 1;
var move;
var fruit1I,fruit2I,fruit3I,fruit4I;
var gameoverI;
var oversound;
var knifesound;
var swordImage;
var score;

function preload(){
swordImage=loadImage("sword.png"); 
knifesound=loadSound("knifeSwooshSound.mp3")
gameoverI=loadImage("gameover.png"); 
oversound=loadSound("gameover.mp3"); 
move=loadAnimation("alien1.png","alien2.png"); 
fruit1I=loadImage("fruit1.png");
fruit2I=loadImage("fruit2.png");
fruit3I=loadImage("fruit3.png")
fruit4I=loadImage("fruit4.png") 
}
function setup (){
 createCanvas(600,600);
 sword = createSprite(200,300,50,50)
sword.addImage(swordImage);
sword.scale=0.6;   
sword.x=200;
sword.y=300;
fruitgroup = new Group()
enemygroup = new Group();
score = 0;
}
function draw(){
background("lightblue");
sword.x= World.mouseX;
sword.y=World.mouseY;
 text("Score: "+score,300,50);
  if (enemygroup.isTouching(sword)){
  gameState=end; 
  }
 if(fruitgroup.isTouching(sword)){
 fruitgroup.destroyEach();
score = score+2;
    }
 if(gameState===end){
  gameover = createSprite(300,300,30,30)
 gameover.addImage(gameoverI)
 gameoverI.scale=0.9;
 enemygroup.destroyEach();
fruitgroup.destroyEach();  
enemygroup.setVelocityXEach(0)
fruitgroup.setVelocityXEach(0)
sword.destroy();
enemygroup.setVisibleEach(false);
fruitgroup.setVisibleEach(false);
 }
  fruits();
enemy();

drawSprites();
}


function fruits(){
if(gameState===play){
  if(World.frameCount%80===0){
 fruit = createSprite(400,400,20,20)  
fruit.scale=0.2;   
r=Math.round(random(1,4));
if(r ==1){
fruit.addImage(fruit1I)   
   }else if(r==2){
fruit.addImage(fruit2I)     
 }else if (r==3){
  fruit.addImage(fruit3I)
 }else{
fruit.addImage(fruit4I)
 }
fruit.y=Math.round(random(50,350))

fruit.setLifeTime=100;
  
fruitgroup.add(fruit)


  fruit.velocityX=-7; 
  
}
}
}

function enemy(){
if(gameState===play){
  if(World.frameCount%200===0){
 monster = createSprite(400,400,20,20)   
  monster.addAnimation("moving",move)
   monster.scale=0.8;
    monster.y=Math.round(random(100,300))
 monster.velocityX=-8;
  monster.setLifeTime=50;
  enemygroup.add(monster);
 
 }  
}
}
 
