console.log("hello world!");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
        if (showResult)
                console.log(`${phrase} ${n1 + n2}`);
}

add(5, 5, true, 'Result is');

