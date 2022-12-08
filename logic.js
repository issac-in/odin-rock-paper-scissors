function getPlayerSelection() {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
    return (playerSelection === null) ? "null" : playerSelection;
}

function getComputerSelection() {
    let computerSelection; // Random selection between "Rock", "Paper", or "Scissors"
    let randomNumber = (Math.floor(Math.random() * 3)) + 1; // Random number between [1,3]
    switch (randomNumber) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
    }
    return computerSelection;
}

function isTie(playerChoice, computerChoice) {
    return (playerChoice === "") ? true : (playerChoice === computerChoice);
}

function noTieLogic(playerChoice, computerChoice) {
    let roundOutcome;
    switch (playerChoice) {
        case "rock":
            roundOutcome = (computerChoice === "scissors") ? 1 : 0;
            break;
        case "paper":
            roundOutcome = (computerChoice === "rock") ?  1 : 0;
            break;
        case "scissors":
            roundOutcome = (computerChoice === "paper") ? 1 : 0;
    }
    return roundOutcome;
}

// TODO: Improve readability of playRound() by abstraction
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    // roundOutcome Logic
    // TODO: Add a dedicated isTie() method due to needing to consider "" input
    let roundOutcome = isTie() ? 0 : noTieLogic(playerChoice, computerChoice);

    // Declaration Logic
    // TODO: Abstract this to a method like declareSingleRound()
    let roundOutcomeMessage;
    switch (roundOutcome) {
        case 1:
            roundOutcomeMessage = `You won - ${playerChoice} beats ${computerChoice}.`;
            break;
        case 0:
            roundOutcomeMessage = `You lost - ${computerChoice} beats ${playerChoice}.`;
            break;
        case -1:
            roundOutcomeMessage = `You tied - ${computerChoice} ties ${playerChoice}.`;
    }

    return roundOutcomeMessage;
    // TODO: Change output parameter to be suitable for roundOutcome in game()
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
        // TODO: Set up playRound() for this.
        let roundOutcome = playRound(getPlayerSelection(), getComputerSelection());
        if (roundNotCanceled(roundOutcome)) {
            netRoundWins += roundOutcome;
            rounds--;
        }
    }
    declareMultipleRound(netOutcome);
}

game();