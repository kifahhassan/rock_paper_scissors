function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);

switch (number) {
    case 0:
        return "ROCK";
    case 1:
        return "PAPER";
    case 2:
        return "SCISSORS";
    default:
        return "The system produced an error. Please try again"; //This handles unexpected values
}
}

playerScore = 0;
computerScore = 0;
roundWinner = "";


function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
        ) {
            playerScore++;
            roundWinner = "player";
        }
    if (
        computerSelection === "PAPER" && playerSelection === "ROCK" ||
        computerSelection === "ROCK" && playerSelection === "ROCK" ||
        computerSelection === "SCISSORS" && playerSelection === "PAPER"
    ) {
        computerScore++;
        roundWinner = "computer";
    }
}

const computerSelection = getComputerChoice().toUpperCase();

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play rock, paper, scissors.").toUpperCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
