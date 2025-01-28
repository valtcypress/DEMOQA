import { webTables } from "../Pages/WebTables";
import { LOCATORS } from "../utils/data";
import { generateRandomName } from "../utils/function";
import { generateRandomNum } from "../utils/function";

const randomEmail = `${generateRandomName(6)}@gmail.com`;
const randomName = `${generateRandomName(6)}`;
const randomLastName = `${generateRandomName(8)}`;
const randomLastName2 = `${generateRandomName(7)}`;
const randomNum = `${generateRandomNum(3)}`;

describe("Web Tables", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(webTables.NAMES.elements).click();
  });
  it("Verify Web Tables Page", () => {
    cy.url().should("include", webTables.NAMES.elementsLinkName);
    cy.contains(webTables.NAMES.webTablesLink).click();
    cy.url().should("include", webTables.NAMES.webTablesLinkName);
    cy.get(webTables.LOCATORS.heading).should("contain",webTables.NAMES.webTablesTitle
    );
    cy.get(webTables.LOCATORS.mainTable).should("be.visible");
    cy.get(webTables.LOCATORS.addButton).should("be.visible");
    cy.get(webTables.LOCATORS.col).should("be.visible");
    cy.get(webTables.LOCATORS.search).should("have.value", "");
    cy.get(webTables.LOCATORS.table).should("be.visible");
    cy.get(webTables.LOCATORS.content).should("be.visible").and("have.length", 7);
  });
  it("Should add/edit/delete a row", () => {
    cy.contains(webTables.NAMES.webTablesLink).click();
    cy.get(webTables.LOCATORS.addButton).click();
    cy.get(webTables.LOCATORS.firstName).type(randomName);
    cy.get(webTables.LOCATORS.lastName).type(randomLastName);
    cy.get(webTables.LOCATORS.userEmail).type(randomEmail);
    cy.get(webTables.LOCATORS.age).type(randomNum);
    cy.get(webTables.LOCATORS.salary).type(randomNum);
    cy.get(webTables.LOCATORS.department).type(randomName);
    cy.get(webTables.LOCATORS.submit).click();
    cy.get(webTables.LOCATORS.table).contains(randomName).should("exist");
    cy.get(webTables.LOCATORS.table).contains(randomLastName).should("exist");
    cy.get(webTables.LOCATORS.table).contains(randomEmail).should("exist");

    cy.get(webTables.LOCATORS.table).contains(randomLastName);
    cy.get(webTables.LOCATORS.table).find(webTables.LOCATORS.edit).click();
    cy.get(webTables.LOCATORS.lastName).clear().type(randomLastName2);
    cy.get(webTables.LOCATORS.submit).click();
    cy.get(webTables.LOCATORS.table).contains(randomLastName2).should("exist");
    cy.get(webTables.LOCATORS.search).type(randomEmail);
    cy.get(webTables.LOCATORS.table).should("contain", randomEmail);

    cy.get(webTables.LOCATORS.table).contains(randomName);
    cy.get(webTables.LOCATORS.table).find(webTables.LOCATORS.delete).click();
    cy.get(webTables.LOCATORS.table).contains(randomName).should("not.exist");
  });
});
