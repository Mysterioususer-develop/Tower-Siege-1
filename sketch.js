const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1;

function preload(){



}


function setup() {
 var canvas = createCanvas(800,400);
 
 engine = Engine.create();
 world = engine.world;
 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

//platform
platform = new Ground(400,240,200,30)
//Row #1
block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
block5 = new Box(450,235,30,40);
//Row#2
block6 = new Box(360,195,30,40);
block7 = new Box(390,135,30,40);
block8 = new Box(420,195,30,40);
//Row#3
block9 = new Box(390,155,30,40);
//slingshot
slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background("black");
  Engine.update(engine);  
  //drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  platform.display();
  slingshot.display();
ellipseMode(RADIUS);
ellipse(polygon.position.x,polygon.position.y,20,20);

}
function mouseDragged(){
 Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 slingshot.fly();
}