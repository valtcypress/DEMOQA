class RadioButton {
  NAMES = {
    radioButtonOnPanel: "Radio Button",
    radioButtonPageTitle: "Radio Button",
    radioButtonYes: "Yes",
    radioButtonImpressive: "Impressive",
    radioButtonNo: "No",
  };

  h1TitleRadioButton() {
    return cy.get(".text-center");
  }

  doYouLikeTheSite() {
    return cy.get(".mb-3");
  }

  radioButtonType() {
    return cy.get('input[type="radio"]');
  }

  testAfterButtonCheck() {
    return cy.get(".text-success");
  }

  yourSelectedOption() {
    return cy.get(".mt-3");
  }
}

export const radioButton = new RadioButton();
