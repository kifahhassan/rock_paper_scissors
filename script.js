
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
let computerSelection = '';


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
    if (
        computerSelection === "PAPER" && playerSelection === "PAPER" ||
        computerSelection === "ROCK" && playerSelection === "ROCK" ||
        computerSelection === "SCISSORS" && playerSelection === "SCISSORS"
    ) {
        return console.log('TIE');
    }
}

let btns = document.querySelectorAll('.btn');

let playerPick = document.getElementById('playerPick');
let computerPick = document.getElementById('computerPick');
let scorePlayer = document.getElementById('scorePlayer');
let scoreComputer = document.getElementById('scoreComputer');

function resetScoreboard() {
    playerScore = 0;
    computerScore = 0;
    scorePlayer.textContent = "Player score: " + playerScore;
    scoreComputer.textContent = "Computer score: " + computerScore;
    playerPick.textContent = "";
    computerPick.textContent = "";
}

function checkWinnerAndReset() {

    if (playerScore === 5) {
        alert('Player wins!');
        resetScoreboard();

    } else if (computerScore === 5) {
        alert('Computer wins!')
        resetScoreboard();
    }
}


btns.forEach(function(element) {
    element.addEventListener('click', function() {

        playerSelection = element.textContent.slice(0, -1).toUpperCase();
        computerSelection = getComputerChoice().toUpperCase();

        playRound(playerSelection, computerSelection);

        playerPick.textContent = "Player threw " + playerSelection + "!";
        computerPick.textContent = "Computer threw " + computerSelection + "!";

        scorePlayer.textContent = "Player score: " + playerScore;
        scoreComputer.textContent = "Computer score: " + computerScore;

        checkWinnerAndReset();

    });
});



// Test to see if it goes to main or branch on github
//Test from ubuntu account. Please ignore