const playButton = "[data-cy='play-button']";
const resultsOutcome = "[data-cy='results-outcome']";

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
});