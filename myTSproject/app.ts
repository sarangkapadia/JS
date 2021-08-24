const button = document.querySelector('button');

function onbuttonclick(): void {
   console.log('clicked');
}

if (button !== null) {
   button.addEventListener('click', onbuttonclick);
}

let arrowFunc = (button: HTMLButtonElement | null) => console.log('hello arrow ' + button);
arrowFunc(button);

class Point {

   // private x: number | undefined;
   // private y: number | undefined;

   constructor(private x: number, private y: number) {
      // this.x = x;
      // this.y = y;
   }

   draw() {
      // .. draw 
      console.log(`X = ${this.x} and Y = ${this.y}`);
   }

   set X(value: number) {
      if (value < 0)
         throw new Error("Value of X < 0");
      this.x = value;
   }

   get X() {
      return this.x;
   }

   set Y(value: number) {
      if (value < 0)
         throw new Error("Value of X < 0");
      this.y = value;
   }

   get Y() {
      return this.y;
   }
}

let P1 = new Point(11, 22);
P1.draw();

P1.X = 23;
P1.Y = 24;
P1.draw();


const str = "heeabbacus";
function longestPalindrome(input: string) {
   const revStr = str.split("").reverse().join("");
   for (let i: number = 0; i < str.length; i++) {

   }

}

