"use strict";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (randomNum) {
        case 0:
            computerChoice = ROCK;
            break;
        case 1:
            computerChoice = PAPER;
            break;
        case 2:
            computerChoice = SCISSORS;
            break;
        default:
            console.error(`Expected num to be 0, 1, or 2. Got ${randomNum}.`);
            return;
    }
    return computerChoice;
}   

function disableButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => { button.disabled = true; });
}

function endGame() {
    let computerScore = document.querySelector(".computerScore");
    let humanScore = document.querySelector(".humanScore");
    let message = document.querySelector(".message");
    
    let computerVal = (+(computerScore.innerText).at(-1));
    let humanVal = (+(humanScore.innerText).at(-1));

    if (humanVal > computerVal) {
        message.innerText = "VICTORY! The human won."
    } else if (humanVal < computerVal) {
        message.innerText = "DEFEAT! The computer won."
    } else {
        message.innerText = "??? The bugs won."
        console.error("Expected VICTORY or DEFEAT, got a tie?");
    }
    
    disableButtons();
}

function processScore(selector = ".humanScore") {
    const ACCEPTED_SELECTORS = [".computerScore", ".humanScore"];
    if (ACCEPTED_SELECTORS.includes(selector)) {
        let selectedScore = document.querySelector(selector);
        let scoreString = selectedScore.innerText;

        let currentNum = (+(scoreString).at(-1));
        let updatedNum = currentNum + 1;
    
        selectedScore.innerText = scoreString.replace(currentNum, updatedNum);

        if (updatedNum === 5) { endGame(); }
    } else {
        console.error(
            `Expected .computerScore or .humanScore, got selector: ${selector}.`
        );
    }
}

function playRound(humanChoice, computerChoice) {
    const COMPUTER_SCORE_SELECTOR = ".computerScore";
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie this round");
    } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
        console.log(`You win this round - ${ROCK} beats ${SCISSORS}.`);
        processScore();
    } else if (humanChoice === PAPER && computerChoice === ROCK) {
        console.log(`You win this round - ${PAPER} beats ${ROCK}.`);
        processScore();
    } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
        console.log(`You win this round - ${SCISSORS} beats ${PAPER}.`);
        processScore();
    } else {
        console.log(
            `You lose this round - ${computerChoice} beats ${humanChoice}.`
        );
        processScore(COMPUTER_SCORE_SELECTOR);
    }
}

let playerChoices = document.querySelector(".playerChoices");

playerChoices.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.innerText.toLowerCase()) {
        case ROCK:
            playRound(ROCK, getComputerChoice());
            break;
        case PAPER:
            playRound(PAPER, getComputerChoice());
            break;
        case SCISSORS:
            playRound(SCISSORS, getComputerChoice());
            break;
        default:
            console.error(
                `Expected rock, paper, or scissors. Got ${target.innerText}.`
            );
    }
});