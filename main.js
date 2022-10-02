let tree;
let onda;
let y_wave = 0;
let spritesheet;
let spritedata;
let animation = [];
let font;
let spritesheet_wolf;
let spritedata_wolf;
let animation_wolf = [];

let cabbage_translate = [0.0,0.0];
let farmer_translate = [0.0,0.0];
let wolf_translate = [0.0,0.0];
let goat_translate = [0.0,0.0];
let ship_translate = [0.0,0.0];
let state = 0;
let interface = 0;
// let margem1 = ["farmer","couve","goat","wolf"];
let in_ship = [];
// let margem2 = [];

let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;

let border = 3;

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
    let img = spritesheet.get(pos.x,pos.y, pos.w, pos.h);
    animation.push(img);
  }

  let frames_wolf = spritedata_wolf.frames;
  for (let i = 0; i<frames.length; i++){
    let pos =frames_wolf[i].position;
    let img = wolf.get(pos.x,pos.y, pos.w, pos.h);
     animation_wolf.push(img);
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


function drawSoluction1(){
  
  if (state<3){
    
    strokeWeight(5);
    stroke(0);
    noFill();
    circle(300,90,160);
    fill(255,0,0);
    strokeWeight(0);
    circle(300,90,s1)
    s1 += 2;

    fill('#ffffff');
    textFont(font);
    textSize(33);
    text("M1_FLCaCo-M2_",227,100);

  
   
    
    
    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70 + wolf_translate[0],190 + wolf_translate[1]);
    image(cabbage, 100+cabbage_translate[0], 260+cabbage_translate[1], 40,40);
    image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    // DrawState(state);
    var speed = 1.0;
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



    if(state < 4){

    strokeWeight(5);
    stroke(0);
    noFill();
    circle(300,90,160);
    fill(255,0,0);
    strokeWeight(0);
    circle(300,90,s2)
    fill('#ffffff');
    textFont(font);
    textSize(33);
    text("M1_LCo-M2_FCa",227,100);
    s2 += 0.8;
    }
    
s2;
    


    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70+wolf_translate[0],190+wolf_translate[1]);
    image(cabbage, 100+cabbage_translate[0], 260+cabbage_translate[1], 40, 40);
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
      s2 = 0;
    }

    if(state == 5){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_FLCo-M2_Ca",227,100);
      s2 += 0.8;
      }
    if (goat_translate[1]>0.0 && state==4){goat_translate[1]-=speed;}
    if (state==4){
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);   
      if(goat_translate[1]<=0.0){in_ship.pop();state=5}
    }
    // else if (state==4){state=5;}
    // else if (goat_translate[1]<=0.0 && in_ship[1]==null && in_ship[0]!=null){state=5;}
    if (in_ship[0]=="farmer" && state==5){
      if (ship_translate[0] > 0 ) {ship_translate[0] -= speed_ship;}
      if (farmer_translate[0] > 30 ){farmer_translate[0] -= speed_ship;}
    }
    if(farmer_translate[0] == 30 && state == 5){state = 6;}

    if(farmer_translate[0]<30 && state == 6){farmer_translate[0] += speed;}
    if(wolf_translate[0]<80 && state == 6){

      image(animation_wolf[Math.floor(frameCount/5)%animation_wolf.length],70+wolf_translate[0],190+wolf_translate[1]);  
      wolf_translate[0] += speed;
      // state = 6;
    }else if (state==6){state=7; s2 = 0;}

    if(state == 7){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_Co-M2_FLCa",227,100);
      s2 += 0.8;
      }
    if(wolf_translate[0] <= 360 && farmer_translate[0] <= 320 && state == 7){
      // state = 7;
      in_ship[1] = "wolf";
      
      if(ship_translate[0] < 320){
        // console.log("state 7, ship=", ship_translate);
        ship_translate[0] += speed_ship;
      }
      if (farmer_translate[0] < 320){farmer_translate[0]+=speed_ship;}
      if (wolf_translate[0] < 361){wolf_translate[0]+=speed_ship;}
    }
    else if (state==7){state=8;}
    if (state==8 && wolf_translate[0]<380){
      image(animation_wolf[Math.floor(frameCount/5)%animation_wolf.length],70+wolf_translate[0],190+wolf_translate[1]);  
      wolf_translate[0] += speed;
      if (wolf_translate[0]>=380){
        state=9;
        in_ship.pop();
      }
    }
    if (state==9){
      s2 = 0;
      if (goat_translate[1]<80.0){goat_translate[1]+=speed;}
      else{in_ship[1] = "goat";state=10;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    }
    if (state==10){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_FCaCo-M2_L",227,100);
      s2 += 0.8;
        
      if (farmer_translate[0]>30.0){farmer_translate[0]-=speed_ship;}
      if (ship_translate[0]>0.0){ship_translate[0]-=speed_ship;}
      if (goat_translate[0]>70.0){goat_translate[0]-=speed_ship;}
      else if (in_ship[1]=="goat"){in_ship.pop();state=11;}
    }
    if (state==11){
      if (goat_translate[0]>0.0){goat_translate[0]-=speed;}
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      else if (in_ship[0]=="farmer"){in_ship.pop();state=12;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    }
    if (state==12){      
      if (farmer_translate[0]>10.0){farmer_translate[0]-=speed;}
      if (farmer_translate[1]<100.0){farmer_translate[1]+=speed;}
      else{state=13;}
    }
    if (state==13){s2 = 0;
      if (cabbage_translate[0]<30){cabbage_translate[0]+=speed;}
      if (cabbage_translate[1]<20.0){cabbage_translate[1]-=speed;}
      if (farmer_translate[1]>20.0){farmer_translate[1]-=speed;}
      else {state=14;in_ship.push("farmer");in_ship.push("cabbage");}
      if (farmer_translate[0]<30){farmer_translate[0]+=speed;}
    }
    if (state==14){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_Ca-M2_FCoL",227,100);
      s2 += 0.8;
      if (cabbage_translate[0]<320){cabbage_translate[0] += speed_ship;}
      if (farmer_translate[0]<320){farmer_translate[0] += speed_ship;}
      else{state=15;in_ship[0]=null;in_ship[1]=null;}
      if (ship_translate[0]<290){ship_translate[0] += speed_ship;}
    }
    if (state==15){
      var x = 360.0;
      if (cabbage_translate[0]<x){cabbage_translate[0]+=speed;}
      if (cabbage_translate[1]<0.0){cabbage_translate[1]+=speed;}
      if (farmer_translate[1]<100.0){farmer_translate[1]+=speed;}
      else {state=16;}
      if (farmer_translate[0]<x){farmer_translate[0]+=speed;}
    }
    if (state==16){s2 = 0;
      if (farmer_translate[0]>320){farmer_translate[0]-=speed;}
      if (farmer_translate[1]>20.0){farmer_translate[1]-=speed;}
      else{state=17;in_ship[0]="farmer";}
    }
    if (state==17){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_FCa-M2_CoL",227,100);
      s2 += 0.8;
      if (farmer_translate[0]>30.0){farmer_translate[0]-=speed_ship;}
      if (ship_translate[0]>0.0){ship_translate[0]-=speed_ship;}
      else {state=18;}
    }
    if (state==18){s2 =0;
      if (goat_translate[0]<70){goat_translate[0] += speed;}
      if (goat_translate[1]<80){goat_translate[1]+=speed;}
      else{state=19;in_ship[1]="goat";}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    }
    if (state==19){

      strokeWeight(5);
      stroke(0);
      noFill();
      circle(300,90,160);
      fill(255,0,0);
      strokeWeight(0);
      circle(300,90,s2)
      fill('#ffffff');
      textFont(font);
      textSize(33);
      text("M1_-M2_FCaCoL",227,100);
      s2 += 0.8;
      if (farmer_translate[0]<320){farmer_translate[0] += speed_ship;}
      if (ship_translate[0]<290){ship_translate[0] += speed_ship;}
      if (goat_translate[0]<360){goat_translate[0] += speed_ship;}
      else{state=20;in_ship[1]=null;}
    }
    if (state==20){
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      else{state=21;}
    }
    // console.log("ship:", ship_translate[0]);
    // console.log("farmer:", farmer_translate);
    // console.log("cabbage:", cabbage_translate);
    // console.log("wolf:", wolf_translate);
    // console.log("goat:", goat_translate);    
  }
  image(ship, 130+ship_translate[0],150);
  // put drawing code here
}


function drawSoluction2(){

  if (state<3){
    
    strokeWeight(5);
    stroke(0);
    noFill();
    circle(300,90,160);
    fill(255,0,0);
    strokeWeight(0);
    circle(300,90,s1)
    s1 += 2;

    fill('#ffffff');
    textFont(font);
    textSize(33);
    text("M1_FLCaCo-M2_",227,100);

    // drawCircleStatess(200,200,20);
  
   
    
    
    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70 + wolf_translate[0],190 + wolf_translate[1]);
    image(cabbage, 100+cabbage_translate[0], 260+cabbage_translate[1], 40,40);
    image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    // DrawState(state);
    var speed = 1.0;
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



    if(state < 4){

      drawCircleStates("M1_LCo-M2_FCa")
    }
    
s2;
    


    image(farmer, 110+farmer_translate[0],150+farmer_translate[1]);
    image(animation_wolf[0], 70+wolf_translate[0],190+wolf_translate[1]);
    image(cabbage, 100+cabbage_translate[0], 260+cabbage_translate[1], 40, 40);
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
      s2 = 0;
    }

    if(state == 5){

      drawCircleStates("M1_FLCo-M2_Ca");
      }
    if (goat_translate[1]>0.0 && state==4){goat_translate[1]-=speed;}
    if (state==4){
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);   
      if(goat_translate[1]<=0.0){in_ship.pop();state=5}
    }
    // else if (state==4){state=5;}
    // else if (goat_translate[1]<=0.0 && in_ship[1]==null && in_ship[0]!=null){state=5;}
    if (in_ship[0]=="farmer" && state==5){
      if (ship_translate[0] > 0 ) {ship_translate[0] -= speed_ship;}
      if (farmer_translate[0] > 30 ){farmer_translate[0] -= speed_ship;}
    }
    if(farmer_translate[0] == 30 && state == 5){state = 6;}

    // if(farmer_translate[0]<30 && state == 6){farmer_translate[0] += speed;}
    if(farmer_translate[1]<100.0 && state == 6){

      // ALTERAR AQUI
      if (farmer_translate[0]>10.0){farmer_translate[0]-=speed;}
      if (farmer_translate[1]<100.0){farmer_translate[1]+=speed;}
      // else{state=7;s2=0;}
      
    }else if (state==6){state=7; s2 = 0;}

    // if(state == 7){

    //   drawCircleStates("M1_L-M2_FCoCa");
    //   }
    if(state == 7){
      s2 = 0;
      if (cabbage_translate[0]<30){cabbage_translate[0]+=speed;}
      if (cabbage_translate[1]<20.0){cabbage_translate[1]-=speed;}
      if (farmer_translate[1]>20.0){farmer_translate[1]-=speed;}
      else {state=8;in_ship.push("farmer");in_ship.push("cabbage");s2=0.0;}
      if (farmer_translate[0]<30){farmer_translate[0]+=speed;}
    }
    // else if (state==7){state=8;}
    if (state==8){
      drawCircleStates("M1_L-M2_FCoCa");
      
      if (cabbage_translate[0]<320){cabbage_translate[0] += speed_ship;}
      if (farmer_translate[0]<320){farmer_translate[0] += speed_ship;}
      else{state=9;in_ship[0]="farmer";in_ship[1]=null;}
      if (ship_translate[0]<290){ship_translate[0] += speed_ship;}
    }
    if (state==9){
      var x = 360.0;
      if (cabbage_translate[0]<x){cabbage_translate[0]+=speed;}
      if (cabbage_translate[1]<0.0){cabbage_translate[1]+=speed;}
      if (farmer_translate[1]<100.0){farmer_translate[1]+=speed;}
      else {s2=0.0;state=10;}
      if (farmer_translate[0]<x){farmer_translate[0]+=speed;}
      
    }
    if (state==10){
        
      // s2 = 0;
      if (farmer_translate[0]>320.0){farmer_translate[0]-=speed;}
      if (farmer_translate[1]>30.0){farmer_translate[1]-=speed;}
      else{in_ship[1] = null;state=11;}
      // if (farmer_translate[0]>30.0){farmer_translate[0]-=speed_ship;}
      // if (ship_translate[0]>0.0){ship_translate[0]-=speed_ship;}
      // if (goat_translate[0]>70.0){goat_translate[0]-=speed_ship;}
      // else if (in_ship[1]=="goat"){in_ship.pop();state=11;}
    }
    if (state==11){
      // if (goat_translate[0]>0.0){goat_translate[0]-=speed;}
      // console.log("goat_trans:", goat_translate[1]);
      if (goat_translate[1]<80.0){goat_translate[1]+=speed;}
      else if (in_ship[0]=="farmer"){in_ship.push("goat");state=12;}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    }
    if (state==12){
      drawCircleStates("M1_LFCa-M2_Co");

      if (goat_translate[0]>0.0){goat_translate[0]-=speed_ship;}
      if (ship_translate[0] > 0 ) {ship_translate[0] -= speed_ship;}
      else{state=13;}
      if (farmer_translate[0] > 30 ){farmer_translate[0] -= speed_ship;}
    }
    if (state==13){
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
      if (goat_translate[0]>0.0){goat_translate[0]-=speed;}
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      else{state=14;in_ship.pop();s2 = 0.0;}
    }
    if (state==14){
      image(animation_wolf[Math.floor(frameCount/5)%animation_wolf.length],70+wolf_translate[0],190+wolf_translate[1]);
      if (wolf_translate[0]<80){wolf_translate[0] += speed;}
      else{state=15;in_ship.push("wolf");}
    }
    if (state==15){
      drawCircleStates("M1_Ca-M2_FLCo");

      if (farmer_translate[0]<320){farmer_translate[0] += speed_ship;}
      if (ship_translate[0]<290){ship_translate[0] += speed_ship;}
      // console.log("STATE 15:", wolf_translate[0], farmer_translate[0]);
      if (wolf_translate[0]<320){wolf_translate[0] += speed_ship;}
      else{state=16;in_ship.pop();s2=0.0;}
      // var x = 360.0;
      // if (cabbage_translate[0]<x){cabbage_translate[0]+=speed;}
      // if (cabbage_translate[1]<0.0){cabbage_translate[1]+=speed;}
      // if (farmer_translate[1]<100.0){farmer_translate[1]+=speed;}
      // else {state=16;}
      // if (farmer_translate[0]<x){farmer_translate[0]+=speed;}
    }
    if (state==16){s2 = 0;
      image(animation_wolf[Math.floor(frameCount/5)%animation_wolf.length],70+wolf_translate[0],190+wolf_translate[1]);
      if (wolf_translate[0]<400){wolf_translate[0]+=speed;}
      else{state=17;in_ship[1]=null;}
    }
    if (state==17){
      if (farmer_translate[0]>30.0){farmer_translate[0]-=speed_ship;}
      if (ship_translate[0]>0.0){ship_translate[0]-=speed_ship;}
      else {state=18;}
    }
    if (state==18){s2 =0;
      if (goat_translate[0]<70){goat_translate[0] += speed;}
      if (goat_translate[1]<80){goat_translate[1]+=speed;}
      else{state=19;in_ship[1]="goat";}
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
    }
    if (state==19){

      drawCircleStates("M1_-M2_FCaCoL");

      if (farmer_translate[0]<320){farmer_translate[0] += speed_ship;}
      if (ship_translate[0]<290){ship_translate[0] += speed_ship;}
      if (goat_translate[0]<360){goat_translate[0] += speed_ship;}
      else{state=20;in_ship[1]=null;}
    }
    if (state==20){
      image(animation[Math.floor(frameCount/5)%animation.length],50+goat_translate[0],50+goat_translate[1]);
      if (goat_translate[1]>0.0){goat_translate[1]-=speed;}
      else{state=21;}
    }
    // console.log("ship:", ship_translate[0]);
    // console.log("farmer:", farmer_translate);
    // console.log("cabbage:", cabbage_translate);
    // console.log("wolf:", wolf_translate);
    // console.log("goat:", goat_translate);    
  }
  image(ship, 130+ship_translate[0],150);
  // put drawing code here
}


function drawCircleStates(msg){
  strokeWeight(5);
  stroke(0);
  noFill();
  circle(300,90,160);
  fill(255,0,0);
  strokeWeight(0);
  circle(300,90,s2)
  fill('#ffffff');
  textFont(font);
  textSize(33);
  text(msg,227,100);
  s2 += 0.8;
}


function drawTextToUser(){
  fill('#000000');
  textFont(font);
  textSize(36);
  text('DIGITE 1 PARA A SOLUÇÃO 1 OU 2 PARA SOLUÇÃO 2.', 50, 50);
}


function mainMenu(){
  fill(250,100,250);
  noStroke();
  rect(200, 400/2, 200, 50);
  rect(200, 400/3, 200, 50);

  textAlign(CENTER);
  textSize(32);
  fill(220,220,220);
  textFont(font);
  var y_decrease = 35;
  text("Solução 1", 300, 400/3+y_decrease);
  text("Solução 2", 300, 400/2+y_decrease);

  noFill();
  stroke(250,250,250);
  rect(200, 400/border, 200, 50);
  // console.log("border=",border);
}


function draw() {
  drawBG();
  // drawTextToUser();
  var soluction = 2;
  
  if (interface==0)
  {
    mainMenu();
    
    //interface++;
  }else if (interface==1){
    if (border==3){
      console.log("Soluction 1 selected.")
      drawSoluction1();
    }
    else if (border==2){
      console.log("Soluction 2 selected.")
      drawSoluction2();
    }
    else {
      textAlign(CENTER);
      fill('#000000');
      textFont(font);
      textSize(36);
      text('OPÇÃO INVÁLIDA.', 200, 50);
    }
  }
  // keyPressed();
  // DrawState(state); //Only debugger.
}


function keyPressed(){
  if (keyCode === UP_ARROW){
    border = 3;
  }
  else if (keyCode === DOWN_ARROW){
    border = 2;
  }
  else if (keyCode === ENTER){
    interface++;
  }
  // return false;
}