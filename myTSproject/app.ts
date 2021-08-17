function combineInputs(a: number | string, b: number | string, resultType: 'n' | 's') {
        let result: number | string;

        if (typeof a === 'number' && typeof b === 'number')
                result = a + b;
        else
                result = a.toString() + b.toString();

        if (resultType === 'n')
                return +result;
        else
                return result.toString();
}

const result = combineInputs('hello', 'world', 's');
console.log(result);

