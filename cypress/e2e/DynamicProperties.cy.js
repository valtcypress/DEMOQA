import { dynamicProperties } from "../Pages/DynamicProperties";
const text = "This text has random Id";
const textEnable = "Will enable 5 seconds";
const textColor = "Color Change";

describe("Dynamic Properties", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(dynamicProperties.NAMES.elements).click();
  });
  it("Verify Dynamic Properties Page", () => {
    cy.contains(dynamicProperties.NAMES.dynamicPropertiesLink).click();
    cy.url().should("include",dynamicProperties.NAMES.dynamicPropertiesLinkName);
    cy.get(dynamicProperties.LOCATORS.heading).should("contain",dynamicProperties.NAMES.dynamicPropertiesTitle);
    cy.get(dynamicProperties.LOCATORS.colMd6).should("contain", text);
    cy.get(dynamicProperties.LOCATORS.enableAfter)
      .should("be.visible")
      .and("have.text", textEnable)
      .and("be.disabled");
    cy.wait(5000);
    cy.get(dynamicProperties.LOCATORS.enableAfter).should("be.enabled");
    cy.get(dynamicProperties.LOCATORS.colorChange)
      .should("be.visible")
      .and("have.text", textColor);
  });
});
