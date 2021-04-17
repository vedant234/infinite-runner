var pizzaImage, pizzaG;
var boyImage, boy;
var score;
var gameState = "hungry";


function preload(){
  boyImage = loadImage("boy.png");
  pizzaImage = loadImage("pizza.jpg");
}
function setup() {
  createCanvas(600,600);

  boy = createSprite(200,200,50,50);
  boy.addImage("boy1",boyImage);
  
  pizzaG = new Group();
  score = 0;
}

function draw() {
  background("lightblue");

if(gameState === "hungry"){

  fill("white");
  textSize(25);
  
  if(keyDown("UP_ARROW")){
    boy.y = boy.y-50;
  }

  // down arrow
    if(keyDown("DOWN_ARROW")){
      boy.y = boy.y+50;
    }

  if(keyDown("LEFT_ARROW")){
    boy.x = boy.x-50;
  }

  // right arrow
  if(keyDown("RIGHT_ARROW")){
    boy.x = boy.x+45;
  }
  spawnPizza();

  // if character is touching pizza, 
  // destroy pizza and increase score 
   if(boy.isTouching(pizzaG)){
     pizzaG.destroyEach()
     score=score+1
   }

  // think of gameover condition
    if(score===100){gameState="gameover"}
  
}
  
  if(gameState === "gameover"){
    textSize(50);
    text("Game over",300,300);
  }
  
  drawSprites();
  textSize(20);
  text("Score: "+ score,400,40);
}

function spawnPizza(){
  if(frameCount%200===0){
      var b = createSprite(random(30,470),0,50,50);
      b.addImage(pizzaImage);
      b.scale=0.5;
      b.velocityY=4;
      pizzaG.add(b);
  }
}

