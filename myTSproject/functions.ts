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

function adder(a: number, b: number, print: (r: number) => void) {
        const result = a + b;
        print(result);
}

adder(19, 23, (res: number) => {
        console.log(`The result is ${res}`);
});