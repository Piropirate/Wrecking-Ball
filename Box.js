class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        rectMode(CENTER);
        fill("blue");
        strokeWeight(2);
        stroke("red");
        rect(0,0,this.width,this.height);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}