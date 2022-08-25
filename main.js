let tree;

function preload(){
  tree = loadImage("assets/tree.png");
}

function setup() {
  var width = 600;
  var height = 400;
  createCanvas(width,height);
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

function drawBG(){
  background(color(0,150,255));
  drawSide1();
  drawSide2();
}

function draw() {
  drawBG();
  image(tree,0,0);
  // put drawing code here
}