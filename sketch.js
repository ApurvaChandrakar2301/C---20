
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground
function setup()
{
  createCanvas(400,400);

  engine= Engine.create()
  world=engine.world;
  
  var ball_option={ restitution:0.69}
  ball=Bodies.circle(100,20,20,ball_option)
  World.add(world,ball)//"World is your module of Matter.js librabry" 
  console.log(ball)

  var ground_options={ isStatic:true }
  ground=Bodies.rectangle(200,380,400,20,ground_options)
  World.add(world,ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
 
}

