"use strict";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
    let humanChoice = "";
    let keepGoing = true;
    while (keepGoing) {
        let humanInput = prompt("Enter a choice: rock, paper, or scissors.");
        humanInput = humanInput ? humanInput.toLowerCase() : "cancel";
        switch (humanInput) {
            case ROCK:
            case "r":
                humanChoice = ROCK;
                keepGoing = false;
                break;
            case PAPER:
            case "p":
                humanChoice = PAPER;
                keepGoing = false;
                break;
            case SCISSORS:
            case "s":
                humanChoice = SCISSORS;
                keepGoing = false;
                break;
            case "cancel":
                console.warn("User cancelled their choice.");
                keepGoing = false;
                break;
            default:
                console.warn(`Choose between r, p, or s - not ${humanInput}.`);
        }
    }
    return humanChoice;
}