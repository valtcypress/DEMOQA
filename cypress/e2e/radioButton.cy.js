import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";
import { radioButton } from "../Pages/radioButton";

describe("DEMO QA Radio Button Page", () => {
  before(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    cy.get(checkBox.LOCATORS.listOfElements)
      .contains(radioButton.NAMES.radioButtonOnPanel)
      .click();
  });

  it("verifies three radio buttons on the page", () => {
    cy.get(radioButton.LOCATORS.h1TitleRadioButton).should(
      "contain",
      radioButton.NAMES.radioButtonPageTitle
    );
    cy.get(radioButton.LOCATORS.doYouLikeTheSite).should(
      "contain",
      "Do you like the site?"
    );
    cy.get(radioButton.LOCATORS.radioButtonType).should("have.length", 3); // Check total radio buttons
    cy.contains("label", radioButton.LOCATORS.labelYes).should("be.visible"); // Ensure label is visible
    cy.contains("label", radioButton.LOCATORS.labelImpressive).should(
      "be.visible"
    );
    cy.contains("label", radioButton.LOCATORS.labelNo).should("be.visible");

    const options = ["Yes", "Impressive"];
    options.forEach((option) => {
      cy.contains("label", option).click(); // Clicks the radio button label
      cy.get(".mt-3").should("contain", `You have selected ${option}`); // Verifies the displayed text
    });

    cy.contains("label", "No") // verifies no radio button is disabled
      .parent()
      .find("input")
      .should("be.disabled");

    cy.contains("label", "Yes").click();
    cy.get('input[type="radio"]').should("not.have.attr", "checked", "checked"); // Ensure only one is checked

    cy.contains("label", "Impressive").click();
    cy.contains("label", "Yes").parent().find("input").should("not.be.checked"); // Ensure "Yes" is unchecked
    cy.contains("label", "Impressive")
      .parent()
      .find("input")
      .should("be.checked"); // Ensure "Impressive" is checked
  });
});
