import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";
import { radioButton } from "../Pages/radioButton";

describe("DEMO QA Radio Button Page", () => {
  before(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    checkBox
      .listOfElements()
      .contains(radioButton.NAMES.radioButtonOnPanel)
      .click();
  });

  it("verifies three radio buttons on the page", () => {
    radioButton
      .h1TitleRadioButton()
      .should("contain", radioButton.NAMES.radioButtonPageTitle);
    radioButton.doYouLikeTheSite().should("contain", "Do you like the site?");
    radioButton.radioButtonType().should("have.length", 3); // Check total radio buttons
    cy.contains("label", radioButton.NAMES.radioButtonYes).should("be.visible"); // Ensure label is visible
    cy.contains("label", radioButton.NAMES.radioButtonImpressive).should(
      "be.visible"
    );
    cy.contains("label", radioButton.NAMES.radioButtonNo).should("be.visible");

    const options = [
      radioButton.NAMES.radioButtonYes,
      radioButton.NAMES.radioButtonImpressive,
    ];
    options.forEach((option) => {
      cy.contains("label", option).click(); // Clicks the radio button label
      radioButton
        .yourSelectedOption()
        .should("contain", `You have selected ${option}`); // Verifies the displayed text
    });

    cy.contains("label", radioButton.NAMES.radioButtonNo) // verifies no radio button is disabled
      .parent()
      .find("input")
      .should("be.disabled");

    cy.contains("label", radioButton.NAMES.radioButtonYes).click();
    radioButton.radioButtonType().should("not.have.attr", "checked", "checked"); // verify only one is checked

    cy.contains("label", radioButton.NAMES.radioButtonImpressive).click();
    cy.contains("label", radioButton.NAMES.radioButtonYes)
      .parent()
      .find("input")
      .should("not.be.checked"); // verify "Yes" is unchecked
    cy.contains("label", radioButton.NAMES.radioButtonImpressive)
      .parent()
      .find("input")
      .should("be.checked"); // verify "Impressive" is checked
  });
});
