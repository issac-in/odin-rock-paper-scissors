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
 * Overall Logic Flow:
 * onClickPlay()
 */
let ofGameMode; // CRITICAL VARIABLE for multiple functions, do not delete!

function noTieLogic(playerChoice, computerChoice) {
  let roundOutcome;
  switch (playerChoice) {
    case "rock":
      roundOutcome = (computerChoice === "scissors") ? 1 : -1
      break;
    case "paper":
      roundOutcome = (computerChoice === "rock") ? 1 : -1;
      break;
    case "scissors":
      roundOutcome = (computerChoice === "paper") ? 1 : -1;
      break;
    default:
      console.error("Invalid playerChoice given.");
  }
  return roundOutcome;
}

function playRound(playerChoice, computerChoice) {
  let roundOutcome;
  switch (ofGameMode) {
    case "first to":
      roundOutcome = isTie(playerChoice, computerChoice) ? 0 : noTieLogic(playerChoice, computerChoice);
      break;
    case "best of":
      roundOutcome = isTie(playerChoice, computerChoice) ? 0 : noTieLogic(playerChoice, computerChoice);
      break;
    default:
      console.error("Invalid ofGameMode given");
  }
  return roundOutcome;
}

function updateScores(roundOutcome) {
  let playerScore = document.getElementById("player-counter");
  let computerScore = document.getElementById("computer-counter");
  switch (roundOutcome) {
    case 1:
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
      break;
    case 0:
      break;
    case -1:
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
      break;
    default:
      console.error("Invalid roundOutcome given.");
  }
}

function updateOutcomes(roundOutcome) {
  let playerOutcomes = document.getElementById("playerOutcomes");
  let computerOutcomes = document.getElementById("computerOutcomes");
  switch (ofGameMode) {
    case "first to":
      switch (roundOutcome) {
        case 1:
          playerOutcomes.innerText = playerOutcomes.innerText.replace("•", "O");
          break;
        case 0:
          break;
        case -1:
          computerOutcomes.innerText = computerOutcomes.innerText.replace("•", "O");
      }
      break;
    case "best of":
      switch (roundOutcome) {
        case 1:
          playerOutcomes.innerText = playerOutcomes.innerText.replace("•", "O");
          computerOutcomes.innerText = computerOutcomes.innerText.replace("•", "X");
          break;
        case 0:
          playerOutcomes.innerText = playerOutcomes.innerText.replace("•", "=");
          computerOutcomes.innerText = computerOutcomes.innerText.replace("•", "=");
          break;
        case -1:
          playerOutcomes.innerText = playerOutcomes.innerText.replace("•", "X");
          computerOutcomes.innerText = computerOutcomes.innerText.replace("•", "O");
      }
  }
}

function isEnd() {
  switch (ofGameMode) {
    case "first to":
      const playerScore = document.getElementById("player-counter").innerText;
      const computerScore = document.getElementById("computer-counter").innerText;
      if (playerScore === "5" || computerScore === "5") { return true; }
      break;
    case "best of":
      const playerOutcomes = document.getElementById("playerOutcomes").innerText;
      const computerOutcomes = document.getElementById("computerOutcomes").innerText;
      if (!(playerOutcomes.includes("•")) && !(computerOutcomes.includes("•"))) { return true; }
  }
  return false;
}

function declareEnd() {
  const playerScore = document.getElementById("player-counter").innerText;
  const computerScore = document.getElementById("computer-counter").innerText;
  const victory = "You won! The computer lost to you.";
  const draw = "You tied! The computer tied you.";
  const loss = "You lost! The computer beat you.";
  let finalOutcome = document.getElementById("outcome");
  finalOutcome.classList.add("accent");
  switch (ofGameMode) {
    case "first to":
      if (playerScore === "5") { finalOutcome.innerText = victory; }
      else if (computerScore === "5") { finalOutcome.innerText = loss; }
      break;
    case "best of":
      if (+playerScore > +computerScore) { finalOutcome.innerText = victory; }
      else if (+playerScore === +computerScore) { finalOutcome.innerText = draw; }
      else if (+playerScore < +computerScore) { finalOutcome.innerText = loss; }
  }

  const resetBtn = document.getElementById("reset");
  resetBtn.innerText = "Play Again";
}

function disablePlayerChoices() {
  const choices = document.querySelectorAll("#choices button");
  choices.forEach((playerChoice) => {
    playerChoice.setAttribute("disabled", true);
  });
}

function playerChoiceEvent() {
  const computerChoice = getComputerChoice();
  let roundOutcome = playRound(this.id, computerChoice);
  updateScores(roundOutcome);
  updateOutcomes(roundOutcome);
  if (isEnd()) {
    declareEnd();
    disablePlayerChoices();
  }
}

function playGame() {
  const choices = document.querySelectorAll("#choices button");
  choices.forEach((playerChoice) => {
    playerChoice.removeAttribute("disabled");
    playerChoice.addEventListener("click", playerChoiceEvent);
  });
}

function openDisplay() {
  const figures = document.querySelectorAll(".figureContainer");
  figures.forEach((figure) => {
    console.log(figure.style.display);
    figure.style.display = "flex";
  });
  const choices = document.getElementById("choices");
  console.log(choices.style.display);
  choices.style.display = "flex";
}

function checkSelectedMode() {
  const play = document.getElementById("play");
  const firstTo = document.getElementById("first-to");
  const bestOf = document.getElementById("best-of");
  const outcome = document.getElementById("outcome");

  if (!(firstTo.checked || bestOf.checked)) {
    outcome.innerText = "Please select a gamemode first!"
    outcome.classList.add("accent");
  }
  else {
    play.style.display = "none";
    firstTo.disabled = true;
    bestOf.disabled = true;
    outcome.classList.remove("accent");
    openDisplay();
    if (firstTo.checked) {
      ofGameMode = "first to";
    }
    else if (bestOf.checked) {
      ofGameMode = "best of";
    }
    outcome.innerText = `Complete the ${ofGameMode} five game.`;
    playGame();
  }
}

function onClickPlay() {
  const play = document.getElementById("play");
  if (play) {
    play.addEventListener("click", () => {
      checkSelectedMode();
    });
  }
}

function resetRPS() {
  // Reset the Game Mode Buttons
  document.getElementById("first-to").removeAttribute("disabled");
  document.getElementById("first-to").checked = false;
  document.getElementById("best-of").removeAttribute("disabled");
  document.getElementById("best-of").checked = false;

  // Reset the game scores
  document.getElementById("player-counter").innerText = 0;
  document.getElementById("computer-counter").innerText = 0;

  // Reset the game outcomes
  document.getElementById("playerOutcomes").innerText = document.getElementById("playerOutcomes").innerText.replaceAll(/[OX=]/g, "•");
  document.getElementById("computerOutcomes").innerText = document.getElementById("computerOutcomes").innerText.replaceAll(/[OX=]/g, "•")

  // Reset the game display
  const figures = document.querySelectorAll(".figureContainer");
  figures.forEach((figure) => {
    console.log(figure.style.display);
    figure.style.display = "none";
  });
  const choices = document.getElementById("choices");
  console.log(choices.style.display);
  choices.style.display = "none";

  // Disable player controls and remove event listeners
  const choiceButtons = document.querySelectorAll("#choices button");
  choiceButtons.forEach((playerChoice) => {
    playerChoice.setAttribute("disabled", true);
    playerChoice.removeEventListener("click", playerChoiceEvent);
  });

  // Reset the final outcome
  const outcome = document.getElementById("outcome");
  outcome.innerText = "Complete a RPS gamemode!";
  outcome.classList.remove("accent");

  // Reset the Play Button
  document.getElementById("play").style.display = "inline-block";

  // Reset the Reset Button text
  document.getElementById("reset").innerText = "Reset Game";
}

function onClickReset() {
  const reset = document.getElementById("reset");
  if (reset) {
    reset.addEventListener("click", () => {
      resetRPS();
    });
  }
}

function switchTheme() {
  const imgSwitch = document.getElementById("theme-switch");
  if (imgSwitch.alt === "dark mode icon") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    imgSwitch.src = "./assets/icons8-sun.svg";
    imgSwitch.alt = "light mode icon";
  }
  else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    imgSwitch.src = "./assets/icons8-moon-phase.svg";
    imgSwitch.alt = "dark mode icon";
  }
}

function onClickTheme() {
  const imgSwitch = document.getElementById("theme-switch");
  if (imgSwitch) {
    imgSwitch.addEventListener('click', switchTheme);  
  }
}

function checkTheme() {
  const imgSwitch = document.getElementById("theme-switch");
  const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light") {
      imgSwitch.src = "./assets/icons8-sun.svg";
      imgSwitch.alt = "light mode icon";
    }
  }
}

onClickPlay();
onClickReset();
onClickTheme();
checkTheme();