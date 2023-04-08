// Game Script

const x = Math.floor(Math.random() * 3) + 1;
let computerchoice = x 

function choice(){
    if (computerchoice == 1){
        return "rock"
    }
    else if (computerchoice == 2){
        return "scissors"
    }
    else if (computerchoice == 3){
        return "paper"
    }
}
console.log(choice())