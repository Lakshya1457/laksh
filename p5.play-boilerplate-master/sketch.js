 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine, world;
 var square1,ground,tri;

function setup() {
createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  square1 = new baseClass(400,380,250,80);
  square2 = new baseClass(400,250,125,50);
  square3 = new baseClass(400,200,50,30);
  square4 = new baseClass(400,100,20,40);
  square5 = new baseClass(240,397,80,180);
  square6 = new baseClass(240,190,25,40);
  square7 = new baseClass(560,397,80,180);
  square8 = new baseClass(560,125,25,40);
 }

function draw() {
background(255,255,255);

Engine.update(engine);

 ground.display();
 square1.display();
 square2.display();
 square3.display();
 square4.display();
 square5.display();
 square6.display();
 square7.display();
 square8.display();
}