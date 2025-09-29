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

//choice of player
function getHumanChoice(){
    let humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLocaleLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

//playRound(humanSelection, computerSelection);
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
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
        console.log(`Score: Human: ${humanScore} VS Computer: ${computerScore}`);
    } 

    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    //if not used for loop above, we needed to call the function 5 times = below
    /*
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    getHumanChoice();
    getComputerChoice();
    playRound(humanSelection, computerSelection);

    getHumanChoice();
    getComputerChoice();
    playRound(humanSelection, computerSelection);

    getHumanChoice();
    getComputerChoice();
    playRound(humanSelection, computerSelection);

    getHumanChoice();
    getComputerChoice();
    playRound(humanSelection, computerSelection);
    */
}

playGame();
