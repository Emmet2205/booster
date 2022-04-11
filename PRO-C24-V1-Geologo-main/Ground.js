class Ground {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
    
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 1000;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      rectMode(CENTER);

      fill("yellow");
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };