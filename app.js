//choice of the computer
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if(computerChoice === 1){
        computerChoice = "rock";
    }
    else if(computerChoice === 2){
        computerChoice = "paper";
    }
    else if(computerChoice === 3){
        computerChoice = "scissors";
    }
    else{
        console.log("Something went wrong with the Random generater - function getComputerChoice()");
    }

    console.log(computerChoice);
}

getComputerChoice(); //testing
