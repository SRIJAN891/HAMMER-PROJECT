class stone
{
    constructor(x,y,width,height){
        var option={
            restitution:0.7,
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
    pos.x=this.body.position.x;
    pos.y=this.body.position.y;
    
  push ()
  translate(pos.x,pos.y)
  rotate (this.body.angle)
  fill ("green")
  rectMode(CENTER);
  rect(0,0,this.width,this.height)
  pop ()
}
        
 
}