class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:5  
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
    fill("white");
    stroke("white")
    var pos=this.body.position;
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    }
  }