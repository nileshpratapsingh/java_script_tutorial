const prompt = requier("prompt-sync")();

console.log("Enter 1 for SNAKE 2 For WATER 3 for GUN")

let choice = prompt("Enter Choice:")

const select = {snake ,water, gun}

function RandomSelector(choice){
    if (choice==snake&&choice==water&&choice==gun){
        console.log("!!You WIN!!")
    }else{
        console.log("!!You LOSE!!")
    }
}
    
    