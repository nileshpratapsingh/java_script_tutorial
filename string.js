const prompt = require("prompt-sync")(); // Importing prompt-sync
const string = prompt("Enter a string: "); // Taking input from user

let length = string.length; // Calculating length of string

console.log(string[0]);
console.log("Length of string is: " + length); // Printing length of string
console.log(string.toLowerCase())
console.log(string.toUpperCase())