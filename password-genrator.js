import { upper, lower, digits, special } from "./testing-data-sets.js";
    const allChars = upper + lower + digits + special;

function generatePassword(length = 20) {
    
    const allChars = upper + lower + digits + special;
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

console.log(generatePassword()); 
console.log(generatePassword(10)); // Example: "aT9V!m#L1"
console.log(allChars.length); // Example: "aT@9V!m#L1qW2zX3bY4"
// Example: "aT@9V!m#L1"
// total combinations = 62^10 (if length is 20)  433,282,791,057,654,000,000,000,000,000,000,000,000,000,000 unique combinations