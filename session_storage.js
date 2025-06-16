let key = prompt("Enter Key:");
let value = prompt("Enter Value:");
sessionStorage.setItem(key,value);
console.log(`The value at ${key} is ${sessionStorage.getItem(key)}`);
sessionStorage.removeItem(key)
sessionStorage.clear();