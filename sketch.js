var ground;
var wall1, wall2, wall3;
var plat1, plat2, plat3, plat4, plat5;
var wall4, wall5;
var button1,button2,button3;
var acid;
var arrow1, arrow2, arrow3, arrow4;
var trigger;
var gate;
var knight, walk;
var edges;
var key;
var knightimg;

function preload(){
  knightimg = loadImage("still/knight 1-4.png");
}

function setup() {
  createCanvas(1820,865);
  edges = createEdgeSprites();


  ground = createSprite(1050,700,1600,20);
  wall1 = createSprite(250,460,20,500);
  wall2 = createSprite(400,220,300,20);
  wall3 = createSprite(540,110,20,220);

  plat1 = createSprite(600,530,250,20);
  plat1.velocityX = -8;
  plat2 = createSprite(850,390,250,20);
  plat2.velocityX = 8;
  plat3 = createSprite(710,230,250,20);
  plat3.velocityX = -8;


  wall4 = createSprite(1570,220,1000,20);
  wall5 = createSprite(1070,115,20,230);

  button1 = createSprite(560,110, 20,50);
  button2 = createSprite(1810,105,20,150);
  button3 = createSprite(320,205,70,20);



  plat4 = createSprite(100,850,150,20);
  plat5 = createSprite(100,860,150,20);
  plat5.visible = false

  acid = createSprite(1000,690,400,20);

  arrow1 = createSprite(1500,950,5,100);
  arrow2 = createSprite(1520,950,5,100);
  arrow3 = createSprite(1540,950,5,100);
  arrow4 = createSprite(1560,950,5,100);

  key = createSprite(430,150,10,20);

  trigger = createSprite(1400,845,10,10);
  trigger.visible = false;

  gate = createSprite(1810,756,20,300);
  gate.visible = false;


  knight = createSprite(350,630,50,100);
  knight.addImage("still",knightimg);
  knight.scale = 1.3;
  
}

function draw() {
  background(0); 
  
  knight.collide(ground);
  knight.collide(plat1);
  knight.collide(plat2);
  knight.collide(plat3);
  // knight.collide(plat4);
  knight.collide(plat5);

  knight.collide(wall1);
  knight.collide(wall2);
  knight.collide(wall3);
  knight.collide(wall4);
  knight.collide(wall5);
  knight.bounceOff(edges);
  ground.bounceOff(edges);
  plat4.bounceOff(edges)
  plat1.bounceOff(edges);
  plat1.bounceOff(wall1);
  plat2.bounceOff(edges);
  plat2.bounceOff(wall1);
  plat3.bounceOff(wall2);
  plat3.bounceOff(wall5);


  
  if(keyDown("space")){
    knight.velocityY = -12;
  }

  knight.velocityY = knight.velocityY + 0.8;

  if(keyDown("right")){
    knight.x = knight.x+12;
  }

  if(keyDown("left")){
    knight.x = knight.x-12;
  }

  if(knight.isTouching(button1)){
    wall5.destroy();
  }
  if(knight.isTouching(button2)){
    ground.y = ground.y  + 6;
    acid.destroy();
  }
  if(knight.isTouching(plat4)){
    plat4.y = plat4.y - 6;
    knight.y = plat4.y- 50;
  }
  if(knight.isTouching(button3)){
    plat4.destroy();
    plat5.visible = true;
    trigger.visible = true;
    gate.visible = true;
  }
  if(knight.isTouching(acid) || knight.isTouching(arrow1) || knight.isTouching(arrow2) || knight.isTouching(arrow3) || knight.isTouching(arrow4)){
    knight.destroy();
  }
  if(knight.isTouching(trigger)){
    arrow1.velocityY = -9;
    arrow2.velocityY = -9;
    arrow3.velocityY = -9;
    arrow4.velocityY = -9;

  }
  if(knight.isTouching(plat1) || knight.isTouching(plat2) || knight.isTouching(plat3)){
    knight.velocityX = 0;
    knight.velocityY = 0;
    plat1.x = knight.x;
  }


  console.log(knight.x, knight.y);
  drawSprites();
}