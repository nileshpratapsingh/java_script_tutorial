const prompt = require("prompt-sync")();
const colors = require("colors");

let a = Number(prompt("Enter a number between 1 to 100: "));
let chances = 0;

while (a !== 56 && a !== 65) {
  if (a > 100 || a < 1) {
    console.error("Number out of range!!!!".red);
  } else if (a > 65) {
    console.log("Number is greater than the actual number".blue);
  } else if (a < 56) {
    console.log("Number is less than the actual number".blue);
  } else if (a > 56 && a < 65) {
    console.log("You are close, but greater than ".blue, a);
  } else if (a < 65 && a > 56) {
    console.log("You are close, but less than ".blue, a);
  } else {
    console.error("Wrong number".red);
  }

  chances++;
  console.log("Chances taken:", chances);

  a = Number(prompt("Enter a number between 1 to 100: "));
}

console.log("Congratulations!".green);
console.log(`You guessed correctly in ${chances} chances!`.yellow);
