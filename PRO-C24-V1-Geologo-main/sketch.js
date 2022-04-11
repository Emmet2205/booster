const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;
var iron;
var ground;
var stone;
var plane;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;



    // Crea un plane, iron, stone, rubber y hammer con las clases creadas
    ground = new Ground(500,550);
    hammer = new Hammer(10,100);
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
    plane = new Plane(600,550,1200,20);
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    //muestra los objetos creados
    ground.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();

    

 
}
