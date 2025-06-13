let numbers = [2, 4, 6, 8];

let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

let names = ["John", "Paul", "Ringo"];

let result = names.every(name => name.length > 3);
console.log(result); // true

let scores = [75, 88, 92, 61];

let allPassed = scores.every(score => score > 50);
console.log(allPassed); // true

let newNumbers = [5, 3, -2, 9];

let hasNegative = newNumbers.some(num => num < 0);
console.log(hasNegative); // true

let inputs = ["hello", "", "world"];

let hasEmpty = inputs.some(input => input === "");
console.log(hasEmpty); // true

let marks = [60, 45, 32, 90];

let anyFailed = marks.some(mark => mark < 35);

if(anyFailed){
    console.log("yes")
}else{
    console.log("no"); // true
}

