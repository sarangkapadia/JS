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

// ==== AJAX HTML request ========
const http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
http.open("GET", url);
http.send();

http.onreadystatechange = function (e: Event) {
   if (this.readyState === 4 && this.status === 200)
      console.log("AJAX"/*http.responseText*/);
   else
      console.log("NO response");
};

// ==== fetch HTML request ========
fetch(url).then(data => { return data.json() }).then(res => { console.log(res) });

