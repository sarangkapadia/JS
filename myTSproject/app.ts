// type any vs unknown
let userInput: unknown;
let userName: string;

userName = 'sarang';
userInput = userName;
// userName = userInput; type unkown is not assignable to string
if (typeof userInput === 'string') {
   userName = userInput
}

// type never

function generateError(msg: string, flag: boolean): never {
   throw { message: msg, flag: flag } // throwing an object
}

generateError('sk error', false);
console.log("Do you see this?"); // this does not print due to the throw