function combine(a, b, resultType) {
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
var result = combine('hello', 'world', 's');
console.log(result);
