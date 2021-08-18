"use strict";
function combineInputs(a, b, resultType) {
    var result;
    if (typeof a === 'number' && typeof b === 'number')
        result = a + b;
    else
        result = a.toString() + b.toString();
    if (resultType === 'n')
        return +result;
    else
        return result.toString();
}
// const result = combineInputs('hello', 'earth', 's');
var func;
func = combineInputs;
console.log(func('hello', 'moon', 's'));
function adder(a, b, print) {
    var result = a + b;
    print(result);
}
adder(19, 23, function (res) {
    console.log("The result is " + res);
});
