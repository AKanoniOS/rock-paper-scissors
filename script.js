// define weapons of choice
let choices = ["rock","paper","scissors"];

// select random weapon for computer
function getComputerChoice(arr) {
    let choice = arr[Math.floor(Math.random()*arr.length)];
    return choice;
}

// define variables that will be used
let playerSelection = "";
let computerSelection = getComputerChoice(choices);
let playerScore = 0;
let computerScore = 0;

// add score element
let score = document.querySelector(".playerScore");
score.textContent = `Player Score: ${playerScore} `;
let compScore = document.querySelector(".computerScore");
compScore.textContent = `Computer Score: ${computerScore}`;

let display = document.querySelector(".message");
display.textContent = `Nothing has been played yet`;

// play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = getComputerChoice(choices);

    // scenarios
    if (playerSelection == computerSelection) {
        display.textContent=(`You both played ${playerSelection}`);
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            display.textContent=("you lose, paper beats rock");
            computerScore += 1;
            compScore.textContent = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "scissors") {
            display.textContent=("you win, rock beats scissors");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore} `;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            display.textContent=("you lose, scissors beats paper");
            computerScore += 1;
            compScore.textContent = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "rock") {
            display.textContent=("you win, paper beats rock");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore} `;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            display.textContent=("you lose, rock beats scissors");
            computerScore += 1;
            compScore.textContent = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "paper") {
            display.textContent=("you win, scissors beats paper");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore} `;
        }
    }
  }
// console.log(playRound(playerSelection, computerSelection));

