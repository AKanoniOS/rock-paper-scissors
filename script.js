let choices = ["rock","paper","scissors"];

function getComputerChoice(arr) {
    let choice = arr[Math.floor(Math.random()*arr.length)];
    console.log(choice);
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice(choices);
//   console.log(playRound(playerSelection, computerSelection));