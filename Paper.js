class Paper {
    constructor(x, y, width) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     // this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill ("pink");
      circle(0, 0, this.width, this.height);
      pop();
      //paper.debud=true;
      
    }
    
      
  };
  
 /*class paper {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill ("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
class paper{

  constructor(x,y,width,height){
      var ground_options ={
          //restitution: 1
      }
  
      this.body= Bodies.rectangle(x,y,width,height,ground_options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);

  }
  display(){
      var pos=this.body.position;
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x,pos.y,this.width,this.height);    
  }

}*/
