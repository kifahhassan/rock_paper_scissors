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

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
        ) {
            playerScore++;
        }
    if (
        computerSelection === "PAPER" && playerSelection === "ROCK" ||
        computerSelection === "ROCK" && playerSelection === "SCISSORS" ||
        computerSelection === "SCISSORS" && playerSelection === "PAPER"
    ) {
        computerScore++;
    }
}


function game() {

    for (let i = 0; i < 5; i++) {

        var playerSelection = prompt("Let's play rock, paper, scissors.").toUpperCase();
        var computerSelection = getComputerChoice().toUpperCase();

        playRound(playerSelection, computerSelection);

        
        console.log("player threw: " + playerSelection);
        console.log("computer threw: " + computerSelection); 

        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    }


    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else if (computerScore === playerScore) {
        console.log("It's a tie!");
    }
}


