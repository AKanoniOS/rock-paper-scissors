let choices = ["rock","paper","scissors"];

function getComputerChoice(arr) {
    let choice = arr[Math.floor(Math.random()*arr.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`You both played ${playerSelection}`);
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("you lose, paper beats rock");
        } else if (computerSelection == "scissors") {
            console.log("you win, rock beats scissors");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("you lose, scissors beats paper");
        } else if (computerSelection == "rock") {
            console.log("you win, paper beats rock");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("you lose, rock beats scissors");
        } else if (computerSelection == "paper") {
            console.log("you win, scissors beats paper");
        }
    }
  }
   
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice(choices);
  console.log(playRound(playerSelection, computerSelection));