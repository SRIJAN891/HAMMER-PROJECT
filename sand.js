class sand
{
    constructor(x,y,width,height){
        var option={
            restitution:1,
            friction:1,
            density:0.8
        }
       this.body=Bodies.rectangle(x,y,width,height,option)
      this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    //pos.x=mouseX;
   // pos.y=mouseY;
  push ()
  translate(pos.x,pos.y)
  fill ("yellow")
  ellipseMode(CENTER);
  ellipse(0,0,this.width,this.height)
  pop ()
}}
