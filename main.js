let tree;
let onda;
let y_wave = 0;
let spritesheet;
let spritedata;
let animation = [];

function preload(){
  tree = loadImage("assets/tree.png");
  waves = loadImage("assets/waves2.png");
  farmer = loadImage("assets/fazendeiro2.png");
  wolf = loadImage("assets/lobo2.png");
  cabbage = loadImage("assets/couve.png");
  spritesheet = loadImage("assets/goat.png");
  spritedata = loadJSON("assets/goatdata.json");
}

function setup() {
  var width = 600;
  var height = 400;
  createCanvas(width,height);
  let frames = spritedata.frames;
  for (let i = 0; i<frames.length; i++){
    let pos =frames[i].position;
    let img = spritesheet.get(pos.x,pos.y, pos.w, pos.h)
    animation.push(img)
  }
  // put setup code here
}

function drawSide1(){
  var c;
  c = color(0,150,0);
  fill(c);
  noStroke();
  rect(0,0,150,height);
}

function drawSide2(){
  var c;
  c = color(0,150,0);
  fill(c);
  noStroke();
  rect(450,0,150,height);
}

function DrawWaves(){
  if (y_wave<-400){
    y_wave=0;
  }
  translate(0,y_wave);
  image(waves,150,0);
  y_wave = y_wave - 1.0;
  // console.log("y=",y_wave);
}

function drawBG(){
  background(color(0,150,255));
  drawSide1();
  drawSide2();

  //left trees side:
  image(tree,-7,0);
  image(tree,7,50);
  image(tree,10,70);
  image(tree,11,115);
  image(tree,13,139);
  image(tree,17,175);
  image(tree,25,210);
  image(tree,30,250);
  image(tree,20,275);
  image(tree,15,290);
  image(tree,25,310);
  image(tree,22,330);
  image(tree,13,360);
  //right trees side:
  var translate_x = 550;
  image(tree,-7+translate_x,1);
  image(tree,7+translate_x,53);
  image(tree,2+translate_x,77);
  image(tree,1+translate_x,125);
  image(tree,3+translate_x,139);
  image(tree,7+translate_x,180);
  image(tree,5+translate_x,220);
  image(tree,3+translate_x,240);
  image(tree,2+translate_x,265);
  image(tree,5+translate_x,280);
  image(tree,5+translate_x,310);
  image(tree,2+translate_x,330);
  image(tree,3+translate_x,360);
  image(farmer, 110,150);
  image(wolf, 100,210, 40,40);
  image(cabbage, 100,260, 40,40);
  image(animation[frameCount%animation.length],50,50)
  
  //Draw ondas:
  DrawWaves();
}

function draw() {
  drawBG();
  // put drawing code here
}