
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper,dustbin,picture;

function preload()
{
picture=loadImage("dustbin.jpg")	
}

function setup() {
	createCanvas(800, 600);
dustbin=createSprite(700,522,50,50);
dustbin.addImage(picture);
dustbin.scale=0.2

	engine = Engine.create();
	world = engine.world;
		var ground_options={
		isStatic:true
	}

    paper=new Paper(100,575,50,50)
    ground=Bodies.rectangle(400,590,800,20,ground_options);

	fill("brown");
	box1= new Box(695,570,105,20);
	box2= new Box(633,522,20,115);
	box3 = new Box(759,522,20,115)
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  paper.depth=dustbin.depth
  dustbin.depth=paper.depth+1
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  box3.display();
  box2.display();
  paper.display();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
  	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-100})
 }
}

