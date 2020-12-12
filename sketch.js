const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


	function setup(){
		var canvas = createCanvas(1200,700);
		
		engine = Engine.create();
		world = engine.world;

		paper1 = new Paper(200,400,50,50);
	    ground1 = new Ground(width/2,height-35,width,10);
		bin1 = new Bin(900,300);
	}

function draw() {
  	rectMode(CENTER);
	  background("white");
	  
	  Engine.update(engine);
	  
	 
	  paper1.display();
	  ground1.display();
	  bin1.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:130,y:-130});
	}
}