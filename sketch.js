var player,bomb,playerImg,bombImg;
var Bg;
var bombExplode
var obs1,obs2,obs3,obs4;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemyImg;
var play = 1;
var gameState = play;
var end = 0;
var win = 2;
var time = 10;

function preload(){
    playerImg = loadImage("sprite_1.png");
    enemyImg = loadImage("sprite_0.png");
    bombImg = loadAnimation("Bomb image.png");
    bombExplode = loadAnimation("B1.png","B2.png","B3.png","B4.png","B5.png","B6.png","B7.png","B8.png");
    bg = loadImage("SpaceBg.png");
}
function setup(){
createCanvas(1200, 600);
    
player = createSprite(725,300,20,20);
player.shapeColor = "   blue";
player.addImage(playerImg);
player.scale = 0.5;

bomb = createSprite(20, 300, 25,75);
bomb.shapeColor = "red";
bomb.addAnimation("bomb",bombImg);
bomb.addAnimation("explode",bombExplode);
bomb.scale = 0.25

obs1 = createSprite(600, 300, 25, 200);
obs1.shapeColor = "blue";
obs2 = createSprite(400, 100, 25, 300);
obs2.shapeColor = "blue";
obs3 = createSprite(400, 500, 25, 300);
obs3.shapeColor = "blue";
obs4 = createSprite(200, 300, 25, 200);
obs4.shapeColor = "blue";

enemy1 = createSprite(700, 100, 20, 20);
enemy1.shapeColor = "red";
enemy1.addImage(enemyImg);
enemy1.scale = 0.5;
enemy2 = createSprite(700, 500, 20, 20);
enemy2.shapeColor = "red";
enemy2.addImage(enemyImg);
enemy2.scale = 0.5;
enemy3 = createSprite(100, 100, 20, 20);
enemy3.shapeColor = "red";
enemy3.addImage(enemyImg);
enemy3.scale = 0.5;
enemy4 = createSprite(100, 500, 20, 20);
enemy4.shapeColor = "red";
enemy4.addImage(enemyImg);
enemy4.scale = 0.5;
enemy5 = createSprite(200, 400, 20, 20);
enemy5.shapeColor = "red";
enemy5.addImage(enemyImg);
enemy5.scale = 0.5;
enemy6 = createSprite(600, 200, 20, 20);
enemy6.shapeColor = "red";
enemy6.addImage(enemyImg);
enemy6.scale = 0.5;

enemy1.setCollider("circle",0,0,60);
enemy2.setCollider("circle",0,0,60);
enemy3.setCollider("circle",0,0,60);
enemy4.setCollider("circle",0,0,60);
enemy5.setCollider("circle",0,0,60);
enemy6.setCollider("circle",0,0,60);

enemy1.velocityX = Math.round(random(1,3));
enemy1.velocityY = Math.round(random(-1,-3));
enemy2.velocityX = Math.round(random(1,3));
enemy2.velocityY = Math.round(random(-1,-3));
enemy3.velocityX = Math.round(random(-1,-3));
enemy3.velocityY = Math.round(random(1,3));
enemy4.velocityX = Math.round(random(1,3));
enemy4.velocityY = Math.round(random(-1,-3));
enemy5.velocityX = Math.round(random(1,3));
enemy5.velocityY = Math.round(random(1,3));
enemy6.velocityX = Math.round(random(-1,-3));
enemy6.velocityY = Math.round(random(1,3));

enemy1.debug = true;
enemy2.debug = true;
enemy3.debug = true;
enemy4.debug = true;
enemy5.debug = true;
enemy6.debug = true;

}
function draw(){
background(bg);
edges = createEdgeSprites();
enemy1.bounceOff(edges);
enemy1.bounceOff(obs1);
enemy1.bounceOff(obs2);
enemy1.bounceOff(obs3);
enemy1.bounceOff(obs4);

enemy2.bounceOff(edges);
enemy2.bounceOff(obs1);
enemy2.bounceOff(obs2);
enemy2.bounceOff(obs3);
enemy2.bounceOff(obs4);

enemy3.bounceOff(edges);
enemy3.bounceOff(obs1);
enemy3.bounceOff(obs2);
enemy3.bounceOff(obs3);
enemy3.bounceOff(obs4);

enemy4.bounceOff(edges);
enemy4.bounceOff(obs1);
enemy4.bounceOff(obs2);
enemy4.bounceOff(obs3);
enemy4.bounceOff(obs4);

enemy5.bounceOff(edges);
enemy5.bounceOff(obs1);
enemy5.bounceOff(obs2);
enemy5.bounceOff(obs3);
enemy5.bounceOff(obs4);

enemy6.bounceOff(edges);
enemy6.bounceOff(obs1);
enemy6.bounceOff(obs2);
enemy6.bounceOff(obs3);
enemy6.bounceOff(obs4);

player.bounceOff(edges);

if (gameState === play){
if (keyDown("UP_ARROW")){
    player.y -= 5;
}  if(keyDown("DOWN_ARROW")){
    player.y += 5;
} if(keyDown("RIGHT_ARROW")){
    player.x += 5;
} if(keyDown("LEFT_ARROW")){
    player.x -= 5;
}
time = time-0.5;
textSize(20);
text("Time Remaning:" + time, 50, 50);
if (player.isTouching(bomb) ){
    bomb.shapeColor = "green";
    gameState = win;
}
player.collide(obs1);
player.collide(obs2);
player.collide(obs3);
player.collide(obs4);

if (time === 0){
    bomb.changeAnimation("explode",bombExplode);
    bomb.scale = 1.5
    gameState = end;
}
if(player.isTouching(enemy1) || player.isTouching(enemy2) || player.isTouching(enemy3) || player.isTouching(enemy4) || player.isTouching(enemy5) || player.isTouching(enemy6)){
    gameState = end;
    
}
}

else if (gameState === win){
    textSize(35);
    text("YOU WIN !",310 , 313);
    enemy1.velocityX = 0;enemy1.velocityY = 0;
    enemy2.velocityX = 0;enemy2.velocityY = 0;
    enemy3.velocityX = 0;enemy3.velocityY = 0;
    enemy4.velocityX = 0;enemy4.velocityY = 0;
    enemy5.velocityX = 0;enemy5.velocityY = 0;
    enemy6.velocityX = 0;enemy6.velocityY = 0;
}
 else if (gameState === end){
    textSize(35);
    text("Game Over !", 295, 317);
    enemy1.velocityX = 0;enemy1.velocityY = 0;
    enemy2.velocityX = 0;enemy2.velocityY = 0;
    enemy3.velocityX = 0;enemy3.velocityY = 0;
    enemy4.velocityX = 0;enemy4.velocityY = 0;
    enemy5.velocityX = 0;enemy5.velocityY = 0;
    enemy6.velocityX = 0;enemy6.velocityY = 0;
}

drawSprites();
}


