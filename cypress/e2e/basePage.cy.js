import { basePage } from "../Pages/basePage";

describe("DEMO QA Base Page", () => {
  it("Verify the cards and clickable links on the base page", () => {
    cy.visit("/");
    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.elementsCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.elementsPageUrlPath
    );
    cy.go("back");

    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.formsCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.formsPageUrlPath
    );
    cy.go("back");

    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.alertsCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.alertsPageUrlPath
    );
    cy.go("back");

    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.widgetsCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.widgetsPageUrlPath
    );
    cy.go("back");

    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.interactionsCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.interactionsPageUrlPath
    );
    cy.go("back");

    cy.get(basePage.LOCATORS.categoryCards)
      .contains(basePage.NAMES.booksCategoryCardTitle)
      .click();
    cy.location("pathname", { timeout: 10000 }).should(
      "include",
      basePage.LOCATORS.booksPageUrlPath
    );
    cy.go("back");
  });
});
