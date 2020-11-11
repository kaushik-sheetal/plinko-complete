class Plinko {
  constructor(x,y) {
    var options = {
      isStatic:true
    }
    this.radius = 10;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x,y,this.radius,options);
    this.color = color(random(0,255), random(0,255), random(0,255));

    World.add(world, this.body);

  }
  display(){

    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
}