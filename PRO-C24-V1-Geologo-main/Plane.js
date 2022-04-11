class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      //this.body = Bodies.rectangle(x,y,width,height);
      //this.body = Bodies.rect(x,y,width,height,options);

      this.width = width;
      this.height = height;

      //World.add(World, this.body);
      //World.add(world, plane);
      World.add(world, this.body);
      
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
