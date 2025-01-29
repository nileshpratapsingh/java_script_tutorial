const prompt = require("prompt-sync")();


    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
  
    let n = prompt("enter the no.");
    let num = n;
    console.log(`Factorial of ${num} is:`, factorial(num));