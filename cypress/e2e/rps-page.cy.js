const firstToMode = "[data-cy='first-to-mode']";
const bestOfMode = "[data-cy='best-of-mode']";
const playButton = "[data-cy='play-button']";
const resultsOutcome = "[data-cy='results-outcome']";

function recursiveGame() {
  cy.get("[data-cy='rock-button']").then(($rockButton) => {
    if ($rockButton.is(":disabled")) { return; }
    else { 
      cy.wrap($rockButton).click();
      recursiveGame();
    }
  });
}

function evaluateFirstTo() {
  let score;
  cy.get("[data-cy='player-score']").then(($playerScore) => {
    score = $playerScore.text();
    if (score === "5") {
      cy.get(resultsOutcome)
        .contains("You won! The computer lost to you.");
    }
  });
  cy.get("[data-cy='computer-score']").then(($computerScore) => {
    score = $computerScore.text();
    if (score === "5") {
      cy.get(resultsOutcome)
        .contains("You lost! The computer beat you.");
    }
  });
}

function evaluateBestOf() {
  cy.get("[data-cy='player-score']").then(($playerScore) => {
    const pScore = parseInt($playerScore.text());

    cy.get("[data-cy='computer-score']").then(($computerScore) => {
      const cScore = parseInt($computerScore.text());

      if (pScore > cScore) {
        cy.get(resultsOutcome)
          .contains("You won! The computer lost to you.");
      }
      else if (pScore === cScore) {
        cy.get(resultsOutcome)
          .contains("You tied! The computer tied you.");
      }
      else if (pScore < cScore) {
        cy.get(resultsOutcome)
          .contains("You lost! The computer beat you.");
      }
      else {
        cy.fail("Unexpected outcome for evaluateBestO()");
      }
    });
  });
}

describe("Rock Paper Scissors page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1. prevents you from playing the game before selecting a gamemode", () => {
    cy.get(resultsOutcome)
      .contains("Complete a RPS gamemode!")
      .and("not.have.class", "accent");
      
    cy.get(playButton).click();

    cy.get(resultsOutcome)
      .contains("Please select a gamemode first!")
      .and("have.class", "accent");
  });

  it("2. shows you what gamemode you've selected at all times",() => {
    cy.get(firstToMode)
      .should("not.be.checked")
      .click();

    cy.get(firstToMode).should("be.checked");

    cy.get(bestOfMode)
      .should("not.be.checked")
      .click();

    cy.get(bestOfMode).should("be.checked");
  });

  it("3. lets you start the gamemode 'first to five' wins", () => {
    cy.get(firstToMode).click();

    cy.get(playButton).click();

    cy.get(resultsOutcome)
      .contains("Complete the first to five game.")
      .and("not.have.class", "accent");
  });

  it("\u30003A. displays correct result at the end of a first to five",() => {
    cy.get(firstToMode).click();

    cy.get(playButton).click();

    recursiveGame();

    cy.get(resultsOutcome).should("have.class", "accent");

    evaluateFirstTo();
  });

  it("4. lets you start the gamemode 'best of five' wins", () => {
    cy.get(bestOfMode).click();

    cy.get(playButton).click();

    cy.get(resultsOutcome)
      .contains("Complete the best of five game.")
      .and("not.have.class", "accent");
  });

  it("\u30004A. displays correct result at the end of a best of five",() => {
    cy.get(bestOfMode).click();

    cy.get(playButton).click();

    recursiveGame();

    cy.get(resultsOutcome).should("have.class", "accent");

    evaluateBestOf();
  });
});