var button = document.querySelector('button');
function onbuttonclick() {
    console.log('clicked');
}
if (button !== null) {
    button.addEventListener('click', onbuttonclick);
}
var arrowFunc = function (button) { console.log('hello arrow ' + button); };
arrowFunc(button);
var f = function () { console.log("I've learned how to call arrow functions"); };
f();
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
var P1 = new Point(11, 22);
P1.draw();
P1.X = 23;
P1.Y = 24;
P1.draw();
var str = "a madam drove";
// reverse  "evord madam a"
var longestPalindrome = function (input) {
    var revInput = str.split("").reverse().join("");
    console.log("Reversed string = " + revInput);
    var i = 0;
    var j = 0;
    var longest = 0;
    while (i < input.length) {
        var currentlongest = 0;
        while (input.charAt(i) === revInput.charAt(j)) {
            i++;
            j++;
            longest++;
        }
        if (currentlongest > longest) {
            longest === currentlongest;
        }
        i++;
        j++;
    }
    return longest;
};
console.log("The longest palindrome is of length " + longestPalindrome(str));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var color1 = Color.Blue;
var color2 = Color.Green;
