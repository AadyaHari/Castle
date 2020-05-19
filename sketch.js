const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20);
    box1 = new Box(50,375,160,20);
    box2 = new Box(350,375,160,20);
    
    box3 = new Box(120,330,20,80);
    box4 = new Box(147,330,20,80);
    box5 = new Box(174,330,20,80);
    box6 = new Box(201,330,20,80);
    box7 = new Box(228,330,20,80);
    box8 = new Box(255,330,20,80);
    box9 = new Box(282,330,20,80);

    box10 = new Box(19,350,25,100);
    box11 = new Box(44,350,25,100);
    box12 = new Box(69,350,25,100);
    box13 = new Box(94,350,25,100);

    box14 = new Box(305,350,25,100);
    box15 = new Box(330,350,25,100);
    box16 = new Box(355,350,25,100);
    box17 = new Box(380,350,25,100);

    box18 = new Box(19,220,20,20);
    box19 = new Box(44,220,20,20);
    box20 = new Box(69,220,20,20);
    box21 = new Box(94,220,20,20);

    box22 = new Box(305,220,20,20);
    box23 = new Box(330,220,20,20);
    box24 = new Box(355,220,20,20);
    box25 = new Box(380,220,20,20);
    box26 = new Box(120,250,15,15);
    box27 = new Box(282,250,15,15);

    box28 = new Box(200,190,800,10);

    box29 = new Box(200,177,40,40);
    box30 = new Box(160,177,40,40);
    box31 = new Box(120,177,40,40);
    box32 = new Box(240,177,40,40);
    box33 = new Box(280,177,40,40);

    box34 = new Box(180,155,40,40);
    box35 = new Box(140,155,40,40);
    box36 = new Box(220,155,40,40);
    box37 = new Box(260,155,40,40);
    
    box38 = new Box(160,125,40,40);
    box39 = new Box(200,125,40,40);
    box40 = new Box(240,125,40,40);

    box41 = new Box(180,100,40,40);
    box42 = new Box(220,100,40,40);

    box43 = new Box(200,75,40,40);





    








}

function draw(){
    background(0);
    Engine.update(engine);
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
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    
    ground.display();
   
}