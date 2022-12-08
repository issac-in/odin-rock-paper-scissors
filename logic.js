function getComputerChoice() {
    let computerChoice; // Random choice between "Rock", "Paper", or "Scissors"
    let randomNumber = (Math.floor(Math.random() * 3)) + 1; // Random number between [1,3]
    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
    }
    return computerChoice;
}

function noTieLogic(playerChoice, computerChoice) {
    let result;
    switch (playerChoice) {
        case "rock":
            result = (computerChoice === "scissors") ? 1 : 0;
            break;
        case "paper":
            result = (computerChoice === "rock") ?  1 : 0;
            break;
        case "scissors":
            result = (computerChoice === "paper") ? 1 : 0;
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    // Result Logic
    let result = (playerChoice === computerChoice) ? -1 : noTieLogic(playerChoice, computerChoice);

    // Declaration Logic
    let resultMessage;
    switch (result) {
        case 1:
            resultMessage = `You won - ${playerChoice} beats ${computerChoice}.`;
            break;
        case 0:
            resultMessage = `You lost - ${computerChoice} beats ${playerChoice}.`;
            break;
        case -1:
            resultMessage = `You tied - ${computerChoice} ties ${playerChoice}.`;
    }

    return resultMessage;
}

function game() { // Input parameter maybe for rounds
    // Keep track of net round-wins 
    // For every round we play
        // Keep track of the round outcome
        // If a round is considered valid
            // add it to the net round-wins, win/tie/lose +1 / 0 / -1
        // Increment/decrement to keep track of rounds played
    // At the end of all rounds, declare the result of the multiple rounds
}

game();