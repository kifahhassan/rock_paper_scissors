
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
        return alert('TIE');
    }
}


function game() {

    // for (let i = 0; i < 5; i++) {git 

        var playerSelection = prompt("Let's play rock, paper, scissors.").toUpperCase();

        playRound(playerSelection, computerSelection);

        
        console.log("player threw: " + playerSelection);
        console.log("computer threw: " + computerSelection); 

        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    // }


    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else if (computerScore === playerScore) {
        console.log("It's a tie!");
    }
};

let btns = document.querySelectorAll('.btn');

let playerPick = document.getElementById('playerPick');
let computerPick = document.getElementById('computerPick');
let scorePlayer = document.getElementById('scorePlayer');
let scoreComputer = document.getElementById('scoreComputer');


btns.forEach(function(element) {
    element.addEventListener('click', function() {

        playerSelection = element.textContent.slice(0, -1).toUpperCase();
        computerSelection = getComputerChoice().toUpperCase();

        console.log(playerSelection);
        console.log(computerSelection);

        playRound(playerSelection, computerSelection);

        console.log(playerScore, computerScore);

        playerPick.textContent = "Player threw " + playerSelection + "!";
        computerPick.textContent = "Computer threw " + computerSelection + "!";

        scorePlayer.textContent = "Player score: " + playerScore;
        scoreComputer.textContent = "Computer score: " + computerScore;




    });
});



// Test to see if it goes to main or branch on github
//Test from ubuntu account. Please ignore