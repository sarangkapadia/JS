"use strict";
var button = document.querySelector('button');
function onbuttonclick() {
    console.log('clicked');
}
if (button !== null) {
    button.addEventListener('click', onbuttonclick);
}
var arrowFunc = function (button) { return console.log('hello arrow ' + button); };
arrowFunc(button);
var Point = /** @class */ (function () {
    // private x: number | undefined;
    // private y: number | undefined;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        // .. draw 
        console.log("X = " + this.x + " and Y = " + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value of X < 0");
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value of X < 0");
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
//let P = new Point();
var P1 = new Point(11, 22);
P1.draw();
P1.X = 23;
P1.Y = 24;
P1.draw();
