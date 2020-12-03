const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23;
var ground;
var ball;
var sling;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,690,600,20);

    box1 = new Box(630,630,100,50);
    box2 = new Box(630,570,100,50);
    box3 = new Box(630,510,100,50);
    box4 = new Box(630,450,100,50);
    box5 = new Box(630,390,100,50);
    box6 = new Box(630,330,100,50);
    box7 = new Box(630,270,100,50);
    box8 = new Box(630,210,100,50);
    box9 = new Box(630,150,100,50);
    box10 = new Box(630,90,100,50);
    box11 = new Box(740,630,100,50);
    box12 = new Box(740,570,100,50);
    box13 = new Box(740,510,100,50);
    box14 = new Box(740,450,100,50);
    box15 = new Box(740,390,100,50);
    box16 = new Box(740,330,100,50);
    box17 = new Box(850,630,100,50);
    box18 = new Box(850,570,100,50);
    box19 = new Box(850,510,100,50);
    box20 = new Box(850,450,100,50);
    box21 = new Box(850,390,100,50);
    box22 = new Box(850,330,100,50);
    box23 = new Box(850,270,100,50);
    ball = new Ball(150,200,100);
    sling = new Slingshot(ball.body,{x:450,y:200})


}
 function draw(){
    background(0);
    Engine.update(engine);
 
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    ball.display();
    sling.display();


    //drawSprites();
 }