class iron
{
    
        constructor(x,y,width,height){
            var option={
                restitution:1,
                friction:1,
                density:12
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
      fill ("grey")
      rectMode(CENTER);
      rect(0,0,this.width,this.height)
      pop ()
    }}
            
