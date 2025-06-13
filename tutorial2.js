const name ="Nilesh";

for (let i in name) {
    console.log(name[i]);
}

let result = "";  // Initialize an empty string to store the result

for (let i in name) {
    result += name[i] ;  // Concatenate each character with a space
}

console.log(result);  // Print the entire string at once

