var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
var ball;
var ground;
var log1,log2,log3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 
	ball=createSprite(20,650,25,25);
	ball.shapeColor=color("red");

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=color("yellow");

	log1=createSprite(720,600,10,80);
	log1.shapeColor=color("brown");

	log2=createSprite(600,600,10,80);
	log2.shapeColor=color("brown");

	log3=createSprite(660,640,120,10);
	log3.shapeColor=color("brown");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function Keydown() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{X:85,y:-85})
	}
}



