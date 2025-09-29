let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    return computerChoice;
}

//choice of player
function getHumanChoice(){
    let humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLocaleLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

//code to play 1 round
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`It's a draw: ${humanChoice} vs ${computerChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You lost ${humanChoice} loses vs ${computerChoice}`);
        computerScore++;
    }
    else {
        console.log(`You won ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

//testing play 1 round
playRound(humanSelection, computerSelection);
