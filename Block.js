class Block{
  constructor(x,y,width,height){
      var boxOptions = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      
      }
      this.body = Bodies.rectangle(x, y, width, height, boxOptions);
      this.width = width
      this.height = height
      World.add(world,this.body);


      
  }
  display(){
      var angle = this.body.angle;
      push()
      translate(this.body.position.x, this.body.position.y)
      rotate(angle)
      

      fill("blue")
      stroke("teal")
      strokeWeight(5)
      rectMode(CENTER)
      rect(0, 0, this.width, this.height)
      pop()
  }
}