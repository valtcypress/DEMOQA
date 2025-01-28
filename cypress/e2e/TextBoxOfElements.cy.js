import { textBox } from "../Pages/TextBoxOfElements";
import { generateRandomName } from "../utils/function";

const fieldError = "field-error";
const randomEmail = `${generateRandomName(6)}@gmail.com`;
const randomName = `${generateRandomName(6)}`;
const randomAddress = `${generateRandomName(8)}`;
const randomPermAddress = `${generateRandomName(7)}`;
const randomInvalidEmail = `${generateRandomName(6)}gmail.com`


describe("Text Box", () => {
  beforeEach(() => {
    cy.visit("/");
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

    cy.get(textBox.LOCATORS.output).should("contain", randomName);
    cy.get(textBox.LOCATORS.output).should("contain", randomEmail);
    cy.get(textBox.LOCATORS.output).should("contain", randomAddress);
    cy.get(textBox.LOCATORS.output).should("contain", randomPermAddress);
  });

  it("Should show an error for an invalid email when other fields are valid", () => {
    cy.contains(textBox.NAMES.textBoxLink).click();
    cy.get(textBox.LOCATORS.userName).type(randomName);
    cy.get(textBox.LOCATORS.userEmail).type(randomInvalidEmail);
    cy.get(textBox.LOCATORS.currentAddress).type(randomAddress);
    cy.get(textBox.LOCATORS.permanentAddress).type(randomPermAddress);
    cy.get(textBox.LOCATORS.submit).click();
    cy.get(textBox.LOCATORS.userEmail).should("have.class", fieldError);
  });
});