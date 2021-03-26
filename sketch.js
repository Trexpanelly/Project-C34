
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Pendulum = new Roof(400, 50, 500, 50);
	bob1 = new Bob(400, 400, 50);
	bob2 = new Bob(300, 400, 50);
	bob3 = new Bob(200, 400, 50);
	bob4 = new Bob(500, 400, 50);
	bob5 = new Bob(600, 400, 50);

	rope1 = new Rope(bob1.body, {x : 400, y : 50});
	rope2 = new Rope(bob2.body, {x : 300, y : 50});
	rope3 = new Rope(bob3.body, {x : 200, y : 50});
	rope4 = new Rope(bob4.body, {x : 500, y : 50});
	rope5 = new Rope(bob5.body, {x : 600, y : 50});

	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  drawSprites();
  Pendulum.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged() {
	Matter.Body.setPosition(bob3.body, {x:  mouseX, y: mouseY});
}


