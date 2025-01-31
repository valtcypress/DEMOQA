import { basePage } from "../Pages/basePage";
import { buttons } from "../Pages/buttons";
import { checkBox } from "../Pages/checkBox";

describe("DEMO QA Buttons Page", () => {
  before(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    cy.get(checkBox.LOCATORS.listOfElements)
      .contains(buttons.NAMES.buttonsOnPanel)
      .click();
  });

  it("verifies three buttons and their functionalities on the page", () => {
    buttons.h1TitleButtons().should("contain", buttons.NAMES.buttonsPageTitle);

    buttons
      .doubleClickButton()
      .should("contain", buttons.NAMES.doubleClickButtonTitle); // double click button functionality
    buttons.doubleClickButton().dblclick();
    buttons
      .doubleClickMessage()
      .should("contain", buttons.NAMES.doubleClickResultText);

    buttons
      .rightClickButton()
      .should("contain", buttons.NAMES.rightClickButtonTitle); // right click button functionality
    buttons.rightClickButton().rightclick();
    buttons
      .rightClickMessage()
      .should("contain", buttons.NAMES.rightClickResultText);

    cy.get("button").eq(3).click(); // right click button functionality (workaround)
    buttons.clickMessage().should("contain", buttons.NAMES.clickResultText);
  });
});
