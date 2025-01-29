const prompt = require("prompt-sync")();


    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
  
    let num = prompt("enter the no.");

    console.log(`Factorial of ${num} is:`, factorial(num));