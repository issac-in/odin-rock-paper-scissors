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

function roundNotCanceled(roundOutcome) {
    return (roundOutcome !== -2);
}

function declareMultipleRound(netOutcome) {
    switch(true) {
        case (netOutcome > 0):
            alert(`You won! The computer lost to you.`);
            break;
        case (netOutcome === 0):
            alert(`You tied! The computer tied you.`);
            break;
        case (netOutcome < 0):
            alert(`You lost! The computer beat you.`);
        default:
            console.error("Error - netOutcome wasn't a expected value.");
    }
}

function game(rounds = 5) {
    let netRoundWins = 0;
    while (rounds > 0) {
        let roundOutcome; // TODO: Set up playRound() for this.
        if (roundNotCanceled(roundOutcome)) {
            netRoundWins += roundOutcome;
            rounds--;
        }
    }
    declareMultipleRound(netOutcome);
}

game();