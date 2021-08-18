type combo = number | string;
type flag = 'n' | 's';

function combineInputs(a: combo, b: combo, resultType: flag) {
        let result: combo;

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
let func: (x: combo, y: combo, z: flag) => combo;
func = combineInputs;
console.log(func('hello', 'moon', 's'));

function addAndHandle(a: number, b: number, callback: (n: number) => void) {
        console.log('addAndHandle called');
        const result = a + b;
        callback(result);
}

const callback = (result: number) => {
        console.log(`yo The result is ${result}`);
}
addAndHandle(19, 21, callback);
