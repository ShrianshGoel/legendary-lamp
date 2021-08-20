var Pla, im
var back, b
var Ok,p
var lo, load
var rasen, rke=2;
  }
  if(GameState===2){
Ok.visible=false;
    ball.visible=false;
image(img,width/5.7,height/3.70);
if(keyDown("s")){
  GameState=3
var ball, o1;
var img
var GameState=1;
function preload(){
  im = loadAnimation("04901cb959ac94a94bcbd1b0dbb56cdc-min.gif");
  b = loadAnimation("wp4000364.jpg");
  o1 = loadAnimation("156-1564984_pokeball-open-png-rendering.png");
  p = loadAnimation("play-button02.gif");
  rk = loadAnimation("1.gif");
    img = loadImage('Screenshot 2021-08-20 10.52.36 AM.png');
 load=loadImage("cup.gif");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  back = createSprite(width/2,height/1.6,90,90);
  back.addAnimation("s",b)
 

  Pla = createSprite(windowWidth/1.2,height/1.241,44,44)
  Pla.addAnimation("main",im)
 
ball = createSprite(width/2,height/2,20,20);
  ball.addAnimation("o",o1);
  ball.scale = height/3198


    Ok = createSprite(windowWidth/2,height/2,44,44)
  Ok.addAnimation("psw",p);

}

function draw() {
  background(220);
  drawSprites()
  
  if (mousePressedOver(Ok)){
GameStat
}
  }
  if(GameState===3){
    lo = createSprite(width/9,height/9,20,20)
    lo.addAnimation("man",load)
  }
}