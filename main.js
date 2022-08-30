let tree;
let onda;
let y_wave = 0;
let spritesheet;
let spritedata;
let animation = [];
let font;
let spritesheet_wolf;
let spritedata_wolf;
let animation_wolf = []

let cabbage_translate = [0.0,0.0];
let farmer_translate = [0.0,0.0];
let wolf_translate = [0.0,0.0];
let goat_translate = [0.0,0.0];
let ship_translate = [0.0,0.0];
let state = 0;
let margem1 = ["farmer","couve","goat","wolf"];
let in_ship = [];
let margem2 = [];

function preload(){
  tree = loadImage("assets/tree.png");
  waves = loadImage("assets/waves2.png");
  farmer = loadImage("assets/fazendeiro2.png");
  wolf = loadImage("assets/wolfsheet2.png");
  cabbage = loadImage("assets/couve.png");
  spritesheet = loadImage("assets/goat.png");
  spritedata = loadJSON("assets/goatdata.json");
  spritedata_wolf = loadJSON("assets/wolf.json");
  ship = loadImage("assets/ship.png");
  font = loadFont("fonts/OstrichSans-Medium.otf")
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

  let frames_wolf = spritedata_wolf.frames;
  for (let i = 0; i<frames.length; i++){
    let pos =frames_wolf[i].position;
    let img = wolf.get(pos.x,pos.y, pos.w, pos.h)
     animation_wolf.push(img)
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
  // translate(0,y_wave);
  image(waves,150,y_wave);
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
  
  //Draw waves:
  DrawWaves();
}


function DrawState(menseger){
  fill('#ffffff');
  textFont(font);
  textSize(36);
  text('State: '+menseger, 20, 50);
}


function draw() {
  drawBG();
  if (state<3){
    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70 + wolf_translate[0],190 + wolf_translate[1]);
    image(cabbage, 100,260, 40,40);
    image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    DrawState(state);
    var speed = 0.6;
    if (goat_translate[0]<70){goat_translate[0] += speed;}
    if (farmer_translate[0]<30){farmer_translate[0] += speed;}
    if (farmer_translate[1]<20){farmer_translate[1]+=speed;}
    if (goat_translate[1]<80){goat_translate[1]+=speed;}
    // console.log("x:",cabbage_translate[0]);
    if (farmer_translate[0]>=30 && farmer_translate[1]>=20 && state<1)
    {in_ship.push("farmer");state=1;}
    if (goat_translate[0]>=70 && goat_translate[1]>=80 && state<2)
    {in_ship.push("goat");state=2;}
    // console.log("in_ship:", in_ship);
    if ((in_ship[0]=="farmer" && in_ship[1]=="goat") || (in_ship[0]=="goat" && in_ship[1]=="farmer"))
    {
      state=3;
      // goat_translate[0] = 70.700;
      // goat_translate[1] = 80.3999;
    }
    image(ship, 130+ship_translate[0],150);
  }
  else if(state>=3){
    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70+wolf_translate[0],190+wolf_translate[1]);
    image(cabbage, 100,260, 40,40);
    image(animation[0],50+goat_translate[0],50+goat_translate[1]);
    var speed_ship = 1.5;
    var speed = 1.0;
    if (goat_translate[0]<360 && state == 3){goat_translate[0] += speed_ship;}
    if (farmer_translate[0]<320 && state == 3){farmer_translate[0] += speed_ship;}
    if (ship_translate[0]<290 && state == 3){ship_translate[0] += speed_ship;}
    // console.log("x:",goat_translate[0],"y:",goat_translate[1]);

    if (ship_translate[0]>=290 && state==3)
    {
      // in_ship.pop("goat");
      state=4;
    }
    if (goat_translate[1]>0.0 && state==4){goat_translate[1]-=speed;}
    if (state==4){
      if (goat_translate[1]>0.0){goat_translate[1]-=0.2;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);   
      
    }
    if (goat_translate[1]<=0.0){state=5;}
    if (in_ship[0]=="farmer" && state==5){
      
      if (ship_translate[0] > 0 ) {ship_translate[0] -= speed_ship; console.log("here")}
      if (farmer_translate[0] > 30 ){farmer_translate[0] -= speed_ship;}
    }
    if(farmer_translate[0] == 30 && state == 5){state = 6;}

    if(farmer_translate[0]<30 && state == 6){farmer_translate[0] += speed;}
    if(wolf_translate[0]<80 && state == 6){

      image(animation_wolf[Math.floor(frameCount/5)%animation_wolf.length],70+wolf_translate[0],190+wolf_translate[1]);  
      wolf_translate[0] += speed;
    }
    if(wolf_translate[0] == 80 && farmer_translate[0] == 30 && state == 6){
      state = 7;
      in_ship[1] = "wolf";
      
      if(ship_translate[0] < 320){ship_translate[0] += speed_ship;}
    }


    image(ship, 130+ship_translate[0],150);
    
    DrawState(state);
    
  }
  
  // put drawing code here
}