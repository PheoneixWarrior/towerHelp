const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var block1, block2, block3,block4, block5, block6


var engine, world;
var ground, 



function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 750, 1200, 20)
    platform = new Platform(330, 350, 120, 5)
    block1 = new Block(400, 400, 20, 20)
    

   
    console.log(ground);
}

function draw(){
    background("lightblue");
    Engine.update(engine);


ground.display();
    
}

function mouseDragged(){

}
