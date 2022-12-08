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
            roundOutcome = (computerChoice === "scissors") ? 1 : -1;
            break;
        case "paper":
            roundOutcome = (computerChoice === "rock") ?  1 : -1;
            break;
        case "scissors":
            roundOutcome = (computerChoice === "paper") ? 1 : -1;
            break;
        default:
            roundOutcome = -2; // Indicate invalid player input (e.g. "null")
    }
    return roundOutcome;
}

function declareSingleRound(roundOutcome, playerChoice, computerChoice) {
    switch (roundOutcome) {
        case 1:
            console.log(`You won - ${playerChoice} beats ${computerChoice}`);
            break;
        case 0:
            console.log(`You tied - ${computerChoice} ties ${playerChoice}.`);
            break;
        case -1:
            console.log(`You lost - ${computerChoice} beats ${playerChoice}.`);
            break;
        default:
            console.error(`Error - unexpected roundOutcome value.`);
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    let roundOutcome = isTie(playerChoice, computerChoice) ? 0 : noTieLogic(playerChoice, computerChoice);

    declareSingleRound(roundOutcome, playerChoice, computerChoice);

    return roundOutcome;
}

function roundNotCanceled(roundOutcome) {
    return (roundOutcome !== -2);
}

function declareMultipleRound(netRoundOutcome) {
    switch(true) {
        case (netRoundOutcome > 0):
            alert(`You won! The computer lost to you.`);
            break;
        case (netRoundOutcome === 0):
            alert(`You tied! The computer tied you.`);
            break;
        case (netRoundOutcome < 0):
            alert(`You lost! The computer beat you.`);
            break;
        default:
            console.error("Error - netRoundOutcome wasn't a expected value.");
    }
}

function game(rounds = 5) {
    let netRoundOutcome = 0;
    while (rounds > 0) {
        let roundOutcome = playRound(getPlayerSelection(), getComputerSelection());
        if (roundNotCanceled(roundOutcome)) {
            netRoundOutcome += roundOutcome;
            rounds--;
        }
    }
    declareMultipleRound(netRoundOutcome);
}

game();