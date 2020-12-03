class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            density:0.04,
            frictionAir:0.0004
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}