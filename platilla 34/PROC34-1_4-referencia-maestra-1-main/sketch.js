const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  
  fruit=loadImage("melon.png");
  g=loadImage("basket.png")
  ground = new Ground();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  
 

  //ball holder with slings
  

}
function draw() {
  background("skyblue"); 
 
 
}

