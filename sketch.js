const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //layer1
    block1 = new Block(300, 275,30,40);
    block2 = new Block(330, 275,30,40);
    block3 = new Block(360, 275,30,40);
    block4 = new Block(390, 275,30,40);
    block5 = new Block(420, 275,30,40);
    block6 = new Block(450, 275,30,40);
    block7 = new Block(480, 275,30,40);

    block8 = new Block(330, 235,30,40);
    //layer2
    blockz1 = new Block(360,235,30,40);
    blockz2 = new Block(390,235,30,40);
    blockz3 = new Block(420,235,30,40);
    blockz4 = new Block(450,235,30,40);

    //layer3
    blockz5 = new Block(390,194,30,40);

    //layer4
    blockz6 = new Block(640,175,30,40);
    blockz7 = new Block(670,175,30,40);
    blockz8 = new Block(700,175,30,40);
    blockz9 = new Block(730,175,30,40);
    blockz10 = new Block(760,175,30,40);

    //layer5
    blockz11 = new Block(700,135,30,40);

    slingShot = new SlingShot(200,50);
}

function draw(){
background(0);
Engine.update(engine);
ground.display();

fill("brown");
stand1.display();
stand2.display();
fill("skyBlue");

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();

blockz1.display();
blockz2.display();
blockz3.display();
blockz4.display();
blockz5.display();
blockz6.display();
blockz7.display();
blockz8.display();
blockz9.display();
blockz10.display();
blockz11.display();
slingShot.display();
}
