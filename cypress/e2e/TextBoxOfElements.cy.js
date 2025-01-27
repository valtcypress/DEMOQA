import { textBox } from "../Pages/TextBoxOfElements";

const fieldError = "field-error";
const randomName = "Poghos Poghosyan";
const randomEmail = "poghos@example.com";
const randomAddress = "Komitas street";
const randomPermAddress = "Avan Arinj";
const nameOutput = "Name:Poghos Poghosyan";
const emailOutput = "Email:poghos@example.com";
const addressOutput = "Current Address :Komitas street";
const permAddressOutput = "Permananet Address :Avan Arinj";
const invalidEmail = "poghosexample.com";

describe("Text Box", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");
    cy.contains(textBox.NAMES.textBoxElements).click();
  });

  it("Verify Text Box Page", () => {
   
    cy.url().should("include", textBox.NAMES.elementsLinkName);
    cy.contains(textBox.NAMES.textBoxLink).click();
    cy.url().should("include", textBox.NAMES.textBoxLinkName);
    cy.get(textBox.LOCATORS.heading).should("contain",textBox.NAMES.textBoxTitle);
    cy.get(textBox.LOCATORS.mainTable).should("be.visible");
    cy.get(textBox.LOCATORS.table).should("have.length", 4);
    cy.get(textBox.LOCATORS.userName).should("be.visible");
    cy.get(textBox.LOCATORS.userEmail).should("be.visible");
    cy.get(textBox.LOCATORS.currentAddress).should("be.visible");
    cy.get(textBox.LOCATORS.permanentAddress).should("be.visible");
    cy.get(textBox.LOCATORS.submit).should("be.visible");
  });
  it("Should submit the form with valid inputs and display the entered values", () => {
    cy.contains(textBox.NAMES.textBoxLink).click();
    cy.get(textBox.LOCATORS.userName).type(randomName);
    cy.get(textBox.LOCATORS.userEmail).type(randomEmail);
    cy.get(textBox.LOCATORS.currentAddress).type(randomAddress);
    cy.get(textBox.LOCATORS.permanentAddress).type(randomPermAddress);
    cy.get(textBox.LOCATORS.submit).click();

    cy.get(textBox.LOCATORS.output).should("contain", nameOutput);
    cy.get(textBox.LOCATORS.output).should("contain", emailOutput);
    cy.get(textBox.LOCATORS.output).should("contain", addressOutput);
    cy.get(textBox.LOCATORS.output).should("contain", permAddressOutput);
  });

  it("Should show an error for empty email field when other fields are filled", () => {
    cy.contains(textBox.NAMES.textBoxLink).click();
    cy.get(textBox.LOCATORS.userName).type(randomName);
    cy.get(textBox.LOCATORS.userEmail).type(invalidEmail);
    cy.get(textBox.LOCATORS.currentAddress).type(randomAddress);
    cy.get(textBox.LOCATORS.permanentAddress).type(randomPermAddress);
    cy.get(textBox.LOCATORS.submit).click();
    cy.get(textBox.LOCATORS.userEmail).should("have.class", fieldError);
  });
});
