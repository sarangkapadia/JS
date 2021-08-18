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
function addAndHandle(a, b, callback) {
    console.log('addAndHandle called');
    var result = a + b;
    callback(result);
}
var callback = function (result) {
    console.log("yo The result is " + result);
};
addAndHandle(19, 21, callback);
