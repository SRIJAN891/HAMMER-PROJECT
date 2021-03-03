class hammer
{
    constructor(x,y,width,height){
        var option={
            restitution:1,
            friction:1,
            density:1
        }
       this.body=Bodies.rectangle(x,y,width,height,option)
      this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    pos.x=mouseX;
    pos.y=mouseY;
  push ()
  translate(pos.x,pos.y)
  fill ("yellow")
  rectMode(CENTER);
  rect(0,0,this.width,this.height)
  pop ()
}
        
 
}