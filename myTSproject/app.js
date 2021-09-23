var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    Coordinate.prototype.draw = function () {
        console.log("X = " + this.x + " Y = " + this.y);
    };
    return Coordinate;
}());
var p1 = new Coordinate();
var p2 = new Coordinate(2, 3);
p1.draw();
p2.draw();
// ==== AJAX HTML request ========
var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
http.open("GET", url);
http.send();
http.onreadystatechange = function (e) {
    if (this.readyState === 4 && this.status === 200)
        console.log("AJAX" /*http.responseText*/);
    else
        console.log("NO response");
};
// https://jsonplaceholder.typicode.com/guide/
// ==== fetch GET ========
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//    .then(data => { return data.json() })
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
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo ska',
        body: 'bar ska',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(function (response) { return response.json(); })
    .then(function (json) {
    console.log(json);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (data) { return data.json(); })
        .then(function (res) { console.log(res); });
});
