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
let roundCount = 1;

// add score element
let score = document.querySelector(".playerScore");
score.textContent = `Player Score: ${playerScore} `;
let compScore = document.querySelector(".computerScore");
compScore.textContent = `Computer Score: ${computerScore}`;

// add message and round element counter
let display = document.querySelector(".message");
display.textContent = `Nothing has been played yet`;
let round = document.querySelector(".round");
round.textContent = `Round ${roundCount}`

// add emoji display boxes - comment out old feature
// let playerEmojiBox = document.querySelector(".playerEmojiBox");
// let computerEmojiBox = document.querySelector(".computerEmojiBox");
let playerEmojiBoxSingle = document.querySelector(".playerEmojiBoxSingle");
let computerEmojiBoxSingle = document.querySelector(".computerEmojiBoxSingle");
let emojiBox = document.querySelector(".emojiBox");

//function to display player weapon display
function displayPlayerWeapon(input){
    if (input == "rock") {
        emojiBox.append(`🪨`);
        playerEmojiBoxSingle.textContent=("🪨");
    } else if (input == "paper") {
        emojiBox.append(`📄`);
        playerEmojiBoxSingle.textContent=("📄");
    } else {
        emojiBox.append(`✂️`);
        playerEmojiBoxSingle.textContent=("✂️");
    }
}

//function to display computer weapon display
function displayComputerWeapon(input){
    if (input == "rock") {
        emojiBox.append("⚔️🪨");
        computerEmojiBoxSingle.textContent=("🪨");
    } else if (input == "paper") {
        emojiBox.append("⚔️📄");
        computerEmojiBoxSingle.textContent=("📄");
    } else {
        emojiBox.append("⚔️✂️");
        computerEmojiBoxSingle.textContent=("✂️");
    }
}

//function to determine the main logic - win/lose scenarios
function getWinnerLoser(playerSelection, computerSelection) {
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

// play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = getComputerChoice(choices);

    // player weapon counter/display emoji boxes
    displayPlayerWeapon(playerSelection);

    // computer weapon counter/display emoji boxes
    displayComputerWeapon(computerSelection);

    // main logic - scenarios
    getWinnerLoser(playerSelection, computerSelection);

    roundCount += 1;
    round.textContent = `Round ${roundCount}`;
  }
// console.log(playRound(playerSelection, computerSelection));



