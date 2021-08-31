const button = document.querySelector('button');

function onbuttonclick(): void {
    console.log('clicked');
}

if (button !== null) {
    button.addEventListener('click', onbuttonclick);
}

const arrowFunc = (button: HTMLButtonElement | null) => { console.log('hello arrow ' + button); };
arrowFunc(button);

const f = () => { console.log("I've learned how to call arrow functions"); };
f();

class Point {

    // private x: number | undefined;
    // private y: number | undefined;

    constructor(private x: number, private y: number) {
        // this.x = x;
        // this.y = y;
    }

    draw() {
        // .. draw 
        console.log(`X = ${this.x} and Y = ${this.y}`);
    }

    set X(value: number) {
        if (value < 0)
            throw new Error("Value of X < 0");
        this.x = value;
    }

    get X() {
        return this.x;
    }

    set Y(value: number) {
        if (value < 0)
            throw new Error("Value of X < 0");
        this.y = value;
    }

    get Y() {
        return this.y;
    }
}

let P1 = new Point(11, 22);
P1.draw();

P1.X = 23;
P1.Y = 24;
P1.draw();


const str = "a madam drove";
// reverse  "evord madam a"
const longestPalindrome = (input: string) => {
    const revInput = str.split("").reverse().join("");
    console.log("Reversed string = " + revInput);
    let i = 0;
    let j = 0;
    let longest = 0;

    while (i < input.length) {
        let currentlongest = 0;

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
}

console.log("The longest palindrome is of length " + longestPalindrome(str));


enum Color {
    Red,
    Blue,
    Green
};

const color1 = Color.Blue;
const color2 = Color.Green;

