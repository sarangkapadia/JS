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
// ==== fetch HTML request ========
fetch(url) /*.then(data => { return data.json() })*/.then(function (res) { console.log(res); });
