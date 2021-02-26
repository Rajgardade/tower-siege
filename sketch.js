const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var trophy1,trophy2
var engine, world,ground;
var Block1,Block2;
var hex1;
//var sling
var blockqwert1, blockqwert
//var slingshot
var polygon1;
var hi;
var hi2;
var constraint
var boxes = []
var circles=[]
var boy



function setup()
  {
  createCanvas(1200,400);

 engine=Engine.create();
  world = engine.world;
  

  
  stand1 = new Stand(500,330,300,10)
  //stand2 = new Stand(1000,200,300,10)

 
  

   block1 = new Block(500,300,20,20)
   block2 = new Block(520,300,20,20)
   block3 = new Block(540,300,20,20)
   block4 = new Block(560,300,20,20)
   block5 = new Block(580,300,20,20)
   block6 = new Block(600,300,20,20)
   block7 = new Block(480,300,20,20)
   block8 = new Block(460,300,20,20)
   block9 = new Block(440,300,20,20)
   block10 =new Block(420,300,20,20)
   block11= new Block(400,300,20,20)

   
   blockq1=new Block(420,260,20,20)
   blockq2=new Block(440,260,20,20)
   blockq3=new Block(460,260,20,20)
   blockq4=new Block(480,260,20,20)
   blockq5=new Block(500,260,20,20)
   blockq6=new Block(520,260,20,20)
   blockq7=new Block(540,260,20,20)
   blockq8=new Block(560,260,20,20)
   blockq9=new Block(580,260,20,20)

   
   blockqw1=new Block(440,220,20,20)
   blockqw2=new Block(460,220,20,20)
   blockqw3=new Block(480,220,20,20)
   blockqw4=new Block(500,220,20,20)
   blockqw5=new Block(520,220,20,20)
   blockqw6=new Block(540,220,20,20)
   blockqw7=new Block(560,220,20,20)
   
   blockqwe1=new Block(460,180,20,20)
   blockqwe2=new Block(480,180,20,20)
   blockqwe3=new Block(500,180,20,20)
   blockqwe4=new Block(520,180,20,20)
   blockqwe5=new Block(540,180,20,20)

   blockqwer1=new Block(480,140,20,20)
   blockqwer2=new Block(500,140,20,20)
   blockqwer3=new Block(520,140,20,20)
   
  // b = new Boundries(170,150,350,15,0)
   z = new Boundries(10,200,15,350,0)
   y = new Boundries(1190,200,15,350,0)
   h = new Boundries(600,400,1200,50,0)


  var optiones = {

    restitution: 0.4,
    density: 5,


   }
   hi= Bodies.circle(300,100,50,optiones)
   World.add(world, hi)

  // hi2 = Bodies.circle(800,80,50)
   //World.add(world,hi2)
    
  
   


  // boy = new Block(600,100,15,15)
   
   
   blockqwert = new Block(500,100,20,20)
   shooter = new Slingshot(hi,{x:200,y:100})
  //  a = new Circle1(200,150,50)

   //var optionsss = {
   //bodyA: hi2,
   //pointB:{x:1100,y:90},
   //length: 20,
  // stiffness: 0.3

   //}
 //var constraint = Matter.Constraint.create(optionsss) ;
   //World.add(world, constraint);
  



  }
 

function draw() {
  background(255);  
   
  Engine.update(engine);

  fill("yellow")
  
  stand1.display();
 // stand2.display();


 //line(hi.position.x,hi.position.y,200,100)
  

  // shooter.display();
  ellipse(hi.position.x,hi.position.y,50)
   //ellipse(hi2.position.x,hi2.position.y,50)
  
   

  // b.display();
   z.display();
   y.display();
   h.display();
   //boy.display();
   //a.display();
   
   

   //StrokeWeight = 0
   fill("cyan")

   //c = fill("blue")
   
   
   //circles.push(new Circle1(300,100,random(10,15)))
   //for(var i = 0; i < circles.length; i++){
   
    //circles.push(new Circle1(300,100,random(10,15)))
  
     //circles[i].display();

   //}








   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
   block6.display()
   block7.display()
   block8.display()
   block9.display()
   block10.display()
   block11.display()

   
   blockq1.display() 
   blockq2.display()
   blockq3.display()
   blockq4.display()
   blockq5.display()
   blockq6.display()
   blockq7.display()
   blockq8.display()
   blockq9.display()

   
   blockqw1.display()
   blockqw2.display()
   blockqw3.display()
   blockqw4.display()
   blockqw5.display()
   blockqw6.display()
   blockqw7.display()
   
   blockqwe1.display()
   blockqwe2.display()
   blockqwe3.display()
   blockqwe4.display()
   blockqwe5.display()

   blockqwer1.display()
   blockqwer2.display()
   blockqwer3.display()
   
   
   blockqwert.display()



}
function mouseDragged(){

//boxes.push(new Block(mouseX,mouseY,random(10,20)))
 Matter.Body.setPosition(this.hi,{x:mouseX,y:mouseY})

}

function mouseReleased(){

  shooter.fly()
}

