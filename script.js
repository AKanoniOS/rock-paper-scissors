let choices = ["rock","paper","scissors"];

function getComputerChoice(arr) {
    let choice = arr[Math.floor(Math.random()*arr.length)];
    return choice;
}

let playerSelection = "rock";
let computerSelection = getComputerChoice(choices);
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = "rock";
    computerSelection = getComputerChoice(choices);

    if (playerSelection == computerSelection) {
        display.textContent=(`You both played ${playerSelection}`);
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            display.textContent=("you lose, paper beats rock");
        } else if (computerSelection == "scissors") {
            display.textContent=("you win, rock beats scissors");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore}`;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            display.textContent=("you lose, scissors beats paper");
        } else if (computerSelection == "rock") {
            display.textContent=("you win, paper beats rock");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore}`;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            display.textContent=("you lose, rock beats scissors");
        } else if (computerSelection == "paper") {
            display.textContent=("you win, scissors beats paper");
            playerScore += 1;
            score.textContent = `Player Score: ${playerScore}`;
        }
    }
  }




let score = document.querySelector(".score");
score.textContent = `Player Score: ${playerScore}`;

let display = document.querySelector(".message");
display.textContent = `Nothing has been played yet`;
   

// console.log(playRound(playerSelection, computerSelection));