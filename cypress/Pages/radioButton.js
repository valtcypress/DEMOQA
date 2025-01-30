class RadioButton {
    NAMES = {
      radioButtonOnPanel: "Radio Button",
      radioButtonPageTitle: "Radio Button",
      radioButtonYes: 'Yes',
      radioButtonImpressive: 'Impressive',
      radioButtonNo: 'No',
      
    }

    LOCATORS = {
        radioButtonOnPanel: "Radio Button",
        radioButtonPageTitle: "Radio Button",
        h1TitleRadioButton: '.text-center',
        doYouLikeTheSite: '.mb-3',
        radioButtonType: 'input[type="radio"]',
        labelYes: 'Yes',
        labelImpressive: 'Impressive',
        labelNo:'No',
        testAfterButtonCheck: '.text-success',


      }
}

export const radioButton = new RadioButton();