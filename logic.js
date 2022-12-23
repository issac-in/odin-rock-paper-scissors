// function getPlayerSelection() {
//     let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
//     return (playerSelection === null) ? "null" : playerSelection;
// }

// function getComputerSelection() {
//     let computerSelection; // Random selection between "Rock", "Paper", or "Scissors"
//     let randomNumber = (Math.floor(Math.random() * 3)) + 1; // Random number between [1,3]
//     switch (randomNumber) {
//         case 1:
//             computerSelection = "Rock";
//             break;
//         case 2:
//             computerSelection = "Paper";
//             break;
//         case 3:
//             computerSelection = "Scissors";
//     }
//     return computerSelection;
// }

// function isTie(playerChoice, computerChoice) {
//     return (playerChoice === "") ? true : (playerChoice === computerChoice);
// }

// function noTieLogic(playerChoice, computerChoice) {
//     let roundOutcome;
//     switch (playerChoice) {
//         case "rock":
//             roundOutcome = (computerChoice === "scissors") ? 1 : -1;
//             break;
//         case "paper":
//             roundOutcome = (computerChoice === "rock") ?  1 : -1;
//             break;
//         case "scissors":
//             roundOutcome = (computerChoice === "paper") ? 1 : -1;
//             break;
//         default:
//             roundOutcome = -2; // Indicate invalid player input (e.g. "null")
//     }
//     return roundOutcome;
// }

// function declareSingleRound(roundOutcome, playerChoice, computerChoice) {
//     switch (roundOutcome) {
//         case 1:
//             console.log(`You won - ${playerChoice} beats ${computerChoice}`);
//             break;
//         case 0:
//             console.log(`You tied - ${computerChoice} ties ${playerChoice}.`);
//             break;
//         case -1:
//             console.log(`You lost - ${computerChoice} beats ${playerChoice}.`);
//             break;
//         default:
//             console.error(`Error - unexpected roundOutcome value.`);
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     let playerChoice = playerSelection.toLowerCase();
//     let computerChoice = computerSelection.toLowerCase();

//     let roundOutcome = isTie(playerChoice, computerChoice) ? 0 : noTieLogic(playerChoice, computerChoice);

//     declareSingleRound(roundOutcome, playerChoice, computerChoice);

//     return roundOutcome;
// }

// function roundNotCanceled(roundOutcome) {
//     return (roundOutcome !== -2);
// }

// function declareMultipleRound(netRoundOutcome) {
//     switch(true) {
//         case (netRoundOutcome > 0):
//             alert(`You won! The computer lost to you.`);
//             break;
//         case (netRoundOutcome === 0):
//             alert(`You tied! The computer tied you.`);
//             break;
//         case (netRoundOutcome < 0):
//             alert(`You lost! The computer beat you.`);
//             break;
//         default:
//             console.error("Error - netRoundOutcome wasn't a expected value.");
//     }
// }

// function game(rounds = 5) {
//     let netRoundOutcome = 0;
//     while (rounds > 0) {
//         let roundOutcome = playRound(getPlayerSelection(), getComputerSelection());
//         if (roundNotCanceled(roundOutcome)) {
//             netRoundOutcome += roundOutcome;
//             rounds--;
//         }
//     }
//     declareMultipleRound(netRoundOutcome);
// }

// game();

// ABOVE IS OG CODE - BELOW IS REWORK TERRITORY
/**
 * RPS Logic Flow from Play Button
 * 1. Click the Play button to trigger, onClickPlay(),which addEventListener to run
 * 2. checkSelectedMode(), which will check the status of the gamemode radio buttons
 *    2A. If neither are checked, let user know to select gamemode first
 *    2B. If one of them is checked, get the display ready for the game, and disable the radio buttons
 *    2C. Then, depending on the gamemode checked, update the resultsOutcome accordingly
 *      2CA. I should probably keep track of gamemode as a global variable
 *    2D. Then, run the game via playGame().
 * 3. In playGame(), activate the player controls for rock, paper, scissors
 *    3A. Then, addEventListener to each control to trigger playerChoiceEvent
 * 4. playerChoiceEvent() should pull the control's id to determine player choice
 *    4A. And pull computer's choice via random choice
 *    4B. Then, get the round outcome from playRound(playerChoice, computerChoice)
 *      4BA. This will utilize isTie() and noTieLogic()
 *    4C. Based on round outcome, update numerical score and outcome strings
 *      4CA. Two separate functioms, updateScores() & updateOutcomes()
 *    4D. Check if the end of a game has been achieved
 *      4DA. If it has, declare the end of the game, and disable player choices again.
 * 
 * RPS Logic Flow from Reset Button
 * 1. Click the Reset button to trigger, onClickReset(), which addEventListener to run
 * 2. resetRPS(), which basically needs to ensure everything is forcibly cleared and hidden
 *    2A. Reset the gamemode radio buttons
 *    2B. Reset the game scores
 *    2C. Reset the game outcomes
 *    2D. Reset the game display
 *    2E. Disable player controls
 *    2F. Remove event listeners
 *    2G. Reset the final outcome text
 *    2H. Reset the play button
 *    2I. Reset the reset button text
 * 
 * RPS Logic Flow from Theme Button
 * 1. Click the Theme button to trigger onClickTheme(), which addEventListener to run
 * 2. switchTheme(), which will default to dark mode color scheme first, but if clicked
 * will change to the light mode color scheme, and change the theme icon accordingly
 * 
 * As an additional plan, which is to store the preferred theme of user in localStorage
 * and set the color scheme accordingly on load
 * 
 * Overall Logic Flow:
 * onClickPlay()
 * onClickReset()
 * onClickTheme()
 * loadPreferredTheme()
 */