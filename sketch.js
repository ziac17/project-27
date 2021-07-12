
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3, bob4,bob5;
var rope1,rope2,rope3, rope4,rope5;
var world;

function preload()
{

}
bobDiameter = 40;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,200,20); 
	bob2 = new Bob (250,200,20); 
	bob3 = new Bob(300,200,20); 
	bob4 = new Bob (350,200,20); 
	bob5 = new Bob (400,200,20); 
	roof = new Roof (330,50,300,30);
	//rope1 = new Rope (bob1.body,roof.body,-bobDiameter*2, 0)

	rope1=new rope(bob1.body,roof.body,-80, 0)
	rope2=new rope(bob2.body,roof.body,-40, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,40, 0)
	rope5=new rope(bob5.body,roof.body,80, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  roof.display(); 
  //rope1.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob2.position.y,40,40);
  ellipse(bob3.position.x,bob3.position.y,40,40);
  ellipse(bob4.position.x,bob4.position.y,40,40);
  ellipse(bob5.position.x,bob5.position.y,40,40);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}
