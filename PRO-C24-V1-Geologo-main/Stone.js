class Stone {
    constructor(x, y, width, height) {
      // Agrega las propiedades de rebote en 0.8,ficción en 0.9 y densidad 12
        var options = {
          'density': 12,
          'friction': 0.9,
          'restitution':0.8,
    
         }
      // Recuerda agregar las propiedades al cuerpo que estás creando.
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };