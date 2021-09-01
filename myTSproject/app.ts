class Coordinate {
   constructor(private x?: number, private y?: number) {
   }

   draw() {
      console.log("X = " + this.x + " Y = " + this.y);
   }
}

const p1 = new Coordinate();
const p2 = new Coordinate(2, 3);
p1.draw();
p2.draw();