const prompt = require("prompt-sync")();
const colors = require('colors');

function ToDrive(age) {
    if (age >= 18) {
        console.log("!!You can drive!!".green);
    } else {
        console.log("!!You can't drive!!".red);
    }
}

let age = prompt("Enter your age:".blue);

ToDrive(age);

let decision;

while (decision !== 2) {
    
    console.log("Do you want to prompt again? \nEnter 1 to YES and 2 to NO".green);
    
    decision = prompt("Enter Choice:".grey);
    if (decision == 1) {
      let NewAge = prompt("Enter your age:".blue);
      ToDrive(NewAge);
    } else if (decision == 2 ){
        break;
    }
    
    if (decision != 2 && decision != 1) {
        console.error("Enter Valid choice:".yellow)
    }
}

if (decision == 2) {
    console.log("!!Thank You!!".rainbow);
}
    
    
    