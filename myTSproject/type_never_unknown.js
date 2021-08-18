"use strict";
// type any vs unknown
var userInput;
var userName;
userName = 'sarang';
userInput = userName;
// userName = userInput; type unkown is not assignable to string
if (typeof userInput === 'string') {
    userName = userInput;
}
// type never
function generateError(msg, flag) {
    throw { message: msg, flag: flag }; // throwing an object
}
generateError('sk error', false);
console.log("Do you see this?"); // this does not print due to the throw
