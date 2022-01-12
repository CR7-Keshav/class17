var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(50,20,10,15,2)
  box2=new Box(75,30,20,10,1)
}

function draw() 
{
  background(220);
  fill ("green")
  box1.show()
  box1.move()
  fill ("blue")
  box2.show()
  box2.move()

}

