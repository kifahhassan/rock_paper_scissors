console.log("Hello, this is a test for JavaScript");

function getComputerChoice(){
    var number = Math.floor(Math.random() * 3) + 1;

switch (number) {
    case 1:
        return "Rock";
    case 2:
        return "Paper";
    case 3:
        return "Scissors";
    default:
        return "The system produced an error. Please try again"; //This handles unexpected values
}

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You win! Rock beats paper";
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        return "You lose! Rock beats paper!"
    } else if (playerSelection == "scissors" && computerSelection =="rock") {
        return "You lose! Rock beats scissors";
    }
}

var playerSelection = prompt("Let's play rock, paper, scissors.")
const computerSelection = getComputerChoice();