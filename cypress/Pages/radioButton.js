class RadioButton {
  NAMES = {
    radioButtonOnPanel: "Radio Button",
    radioButtonPageTitle: "Radio Button",
    radioButtonYes: "Yes",
    radioButtonImpressive: "Impressive",
    radioButtonNo: "No",
  };

  LOCATORS = {
    h1TitleRadioButton: ".text-center",
    doYouLikeTheSite: ".mb-3",
    radioButtonType: 'input[type="radio"]',
    testAfterButtonCheck: ".text-success",
    yourSelectedOption: ".mt-3",
  };
  h1TitleRadioButton(){
    return cy.get(".text-center")
  }
}

export const radioButton = new RadioButton();
