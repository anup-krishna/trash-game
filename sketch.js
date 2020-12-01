
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var paper
var ground
var box1
var box2
var box3
/*function preload()
{
	
}*/

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,515,30);
	ground = new Ground(600,650,1200,10);
	box1 = new Box(900,570,30,150);
	box2 = new Box(1150,570,30,150);
	box3 = new Box(1025,630,250,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //keyPressed();
  Engine.update(engine);
  

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

 function keyPressed (){
  if (keyCode === 32){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:185,y:-185})
  }
  }
  
