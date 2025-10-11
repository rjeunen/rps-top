const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");
const results = document.querySelector("#results");
const runningScore = document.querySelector("#runningScore");

buttonRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
buttonPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
buttonScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

//Choice of computer
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

function checkScore(){
    if(humanScore === 5){
        runningScore.textContent = `WINNER, player won ${humanScore} VS ${computerScore}`;
    }
    else if(computerScore === 5){
        runningScore.textContent = `You LOST, computer won ${computerScore} VS ${humanScore}`;
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        results.textContent = `It's a draw: ${humanChoice} vs ${computerChoice}`;
            console.log(`It's a draw: ${humanChoice} vs ${computerChoice}`);
            runningScore.textContent = `SCORE: Player ${humanScore} VS Computer ${computerScore}`;
            checkScore();
    }
    else if(humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
            results.textContent = `You lost ${humanChoice} loses vs ${computerChoice}`;
        console.log(`You lost ${humanChoice} loses vs ${computerChoice}`);
        computerScore++;
        runningScore.textContent = `SCORE: Player ${humanScore} VS Computer ${computerScore}`;
        checkScore();
    }
    else {
        results.textContent = `You won ${humanChoice} beats ${computerChoice}`;
        console.log(`You won ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        runningScore.textContent = `SCORE: Player ${humanScore} VS Computer ${computerScore}`;
        checkScore();
    }
    console.log(`Score: Human: ${humanScore} VS Computer: ${computerScore}`);
}
