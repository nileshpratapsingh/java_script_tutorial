const prompt = require("prompt-sync")();

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "boom boom", true];
let names = Array.from(marks);
console.log(marks);
console.log(marks[1]);
marks[1] = 100;
console.log(marks[1]);

// Add marks[1] to the array
marks.push(marks[1]);

console.log(typeof marks[11]);
console.log(typeof marks[10]);
console.log(marks.length);
let arr;
for (let i = 0; i < marks.length; i++) {
  arr = marks[i];
}
console.log(arr);
console.log(names);
