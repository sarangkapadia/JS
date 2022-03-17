import features from './featureGates.json';

console.log(features);

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
let url = "https://hubblecontent.osi.officeppe.net/contentsvc/microsoftcontent";

let xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }
};

xhr.send();

// https://jsonplaceholder.typicode.com/guide/

// ==== fetch GET ========


// fetch(url, {
//    method: 'GET',
//    mode: 'no-cors'
// })
//    .then(data => data.json())
//    .then(res => { console.log(res) });

// --- POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//    method: 'POST',
//    body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 2,
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => console.log(json));

// --- PUT ---
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//    method: 'PUT',
//    body: JSON.stringify({
//       id: 1,
//       title: 'foo ska',
//       body: 'bar ska',
//       userId: 1,
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => {
//       console.log(json);
//       fetch('https://jsonplaceholder.typicode.com/posts/1')
//          .then(data => { return data.json() })
//          .then(res => { console.log(res) });
//    });

