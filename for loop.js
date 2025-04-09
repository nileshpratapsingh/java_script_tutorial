const prompt = require("prompt-sync")();

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// let num = prompt("enter the n.");
// let r = prompt("enter the r.");

// console.log(`Factorial of ${num} is:`, factorial(num));
// let d = factorial(num) / (factorial(r) * factorial(num - r));
// console.log(`The ${num}C${r} is:`,d);

let a = 20;
for (let i = 0; i < a; i++) {
  c = i * a;
  console.log(c);
}
console.log("c" + c);
d = a++;
console.log(d + a);

console.log(a);

const obj = {
  name: "ronit arora",
  Address: "243 limited housing society",
  rollno: 215879,
  section: "a",
  passed: true,
};
console.log(obj["name"]);
console.log((obj["name"] = "Nilesh"));
console.log(obj["name"]);

for (let e in obj) {
  console.log(obj[e]);
}

let i = prompt("enter the value:");
while (i < 11) {
  let a = i + 11;
  ++i;
  console.log(a);
}
