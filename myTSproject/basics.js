"use strict";
console.log("hello world!");
function add(n1, n2, showResult, phrase) {
    if (showResult)
        console.log(phrase + " " + (n1 + n2));
}
add(5, 5, true, 'Result is');
