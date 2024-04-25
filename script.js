"use strict";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = "";
    switch (randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.error(`Expected num to be 0, 1, or 2. Got ${randomNum}.`);
            return;
    }
    return choice;
}   