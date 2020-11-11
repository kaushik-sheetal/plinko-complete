const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var ground;
var score = 0;
var count=0;
var particle = [];
var plinkos = [];
var division = [];
var particles;

var gameState = "start";
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);

 engine = Engine.create()
 world = engine.world;

 ground = new Ground(400,790,800,20);

  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k , height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  for(var j = 40; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  
  for(var j = 15; j <=width-30; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
}

function draw() {
  background(0);  

 
  Engine.update (engine)

  fill("white");
  textSize(35);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);
  text("200",720,550);

  //for(var j = 0;j < particles.length; j++)
    //{
    //  particles[j].display();
   // }
  
    for(var k = 0;k < division.length; k++)
    {
  division[k].display();
    }

    for(var j = 0;j < plinkos.length; j++)
    {
  plinkos[j].display();
    }

    //if(frameCount%60===0){
    //  particles.push(new Particle(random(width/2-10 , width/2+10),10,10));
    //}

    if(particles!=null){

     particles.display();

     if(particles.body.position.y>760){

      if(particles.body.position.x<300){

      score = score+500;
      particles = null;
      if(count>=5) gameState = "end";
    }

    else if(particles.body.position.x<600 && particles.body.position.x>300){
      
      score = score+100;
      particles = null;
      if(count>=5) gameState = "end";

    }

    else if(particles.body.position.x<900 && particles.body.position.x>600){
      
      score = score+200;
      particles = null;
      if(count>=5) gameState = "end";

    }

    }
    }

    textSize(30)
    fill("white")
    text("Score:"+score,20,50);

ground.display();

}

function mousePressed(){

if(gameState!=="end"){

count++;
particles = new Particle(mouseX,10,10,10);
}

}