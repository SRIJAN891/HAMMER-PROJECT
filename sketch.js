
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  planey=new plane(400,580,800,20)
  hammery=new hammer(200,200,30,30)
  
  stoney=new stone(400,70,60,60)
  sandy=new sand(200,300,10,10)
  sandy1=new sand(250,340,10,10)
  sandy2=new sand(230,310,10,10)
  sandy3=new sand(205,370,10,10)
  sandy4=new sand(230,320,10,10)
  irony=new iron(130,230,100,100)
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  planey.display();
  hammery.display();
  
  stoney.display();
  sandy.display();
  sandy1.display();
  sandy2.display();
  sandy3.display();
  sandy4.display();
  irony.display()
//  drawSprites();
 
}



