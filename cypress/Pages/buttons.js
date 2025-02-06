class Buttons {
  NAMES = {
    buttonsOnPanel: "Buttons",
    buttonsPageTitle: "Buttons",
    doubleClickButtonTitle: "Double Click Me",
    rightClickButtonTitle: "Right Click Me",
    clickButtonTitle: "Click Me",
    doubleClickResultText: "You have done a double click",
    rightClickResultText: "You have done a right click",
    clickResultText: "You have done a dynamic click",
  };

  h1TitleButtons() {
    return cy.get(".text-center");
  }
  buttonType() {
    return cy.get('button[type="button"]');
  }
  doubleClickButton() {
    return cy.get("#doubleClickBtn");
  }
  rightClickButton() {
    return cy.get("#rightClickBtn");
  }
  clickButton() {
    return cy.get('[id^="btn-"][id$="-click"]');
  }
  doubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }
  rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
  clickMessage() {
    return cy.get("#dynamicClickMessage");
  }
  generalButtonClass() {
    return cy.get(".btn-primary");
  }
}

export const buttons = new Buttons();
