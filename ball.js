class BallClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':2.5,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y,radius, options);
        
        this.image=loadImage("images/paperimagehw25.png");

        World.add(world, this.body);
      }
      display(){
       imageMode(CENTER);
        //image(this.image,this.body.position.x,this.body.position.y);
       // ellipse(this.body.position.x,this.body.position.y,50,50);
       image(this.image,this.body.position.x,this.body.position.y,50,50)
        console.log("hi");
      }
}