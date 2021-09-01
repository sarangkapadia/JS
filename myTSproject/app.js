"use strict";
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
