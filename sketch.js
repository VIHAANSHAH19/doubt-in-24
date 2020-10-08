
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1,dustbin2,dustbin3,ground;
var circle1;
//var force=3

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(340,480,100,PI/100)
	dustbin2 = new Dustbin(400,520,100,PI/2)
	dustbin3 = new Dustbin(460,480,100,PI/100)
    ground = new Dustbin(400,600,800,PI/2)
	circle1 = new Paper()

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 if(keyDown(UP_ARROW)){
//Matter.Body.applyForce(circle1,circle1.body.position,{x:85,y:-85})
//applyForce(force)

 }
  Engine.run(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  circle1.display();

  drawSprites();
 
}



