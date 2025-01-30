import { links } from "../Pages/Links";

const badRequest = "Bad Request";
const moved = "Moved";
const noContent = "No Content";
const created = "Created";
const dynamicText = "dynamicText";
const h1 = "Following links will open new tab";
const h2 = "Following links will send an api call";
const home = "Home";
const unauthorized = "Unauthorized";
const forbidden = "Forbidden";
const notFound = "Not Found";

describe("Links", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(links.NAMES.elements).click();
  });
  it("Verify Links Page", () => {
    cy.contains(links.NAMES.linksLink).click();
    cy.url().should("include", links.NAMES.linksLinkName);
    cy.get(links.LOCATORS.heading).should("contain", links.NAMES.linksTitle);
    cy.get(links.LOCATORS.linkWrapper).should("contain", h1);
    cy.get(links.LOCATORS.simpleLink).should("have.text", home).click(),
      cy.url().should("include", links.NAMES.linksLinkName);
    cy.get(links.LOCATORS.dynamicLink).invoke("text").as(dynamicText);
    cy.reload();
    cy.get(links.LOCATORS.dynamicLink)
      .invoke("text")
      .should("not.eq", Cypress.env(dynamicText));
    cy.get(links.LOCATORS.linkWrapper).should("contain", h2);
    cy.get(links.LOCATORS.created).should("have.text", created).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 201)
      .and("include.text", created);
    cy.get(links.LOCATORS.noContent).should("have.text", noContent).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 204)
      .and("include.text", noContent);
    cy.get(links.LOCATORS.moved).should("have.text", moved).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 301)
      .and("include.text", moved);
    cy.get(links.LOCATORS.badRequest).should("have.text", badRequest).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 400)
      .and("include.text", badRequest);
    cy.get(links.LOCATORS.unauthorized)
      .should("have.text", unauthorized)
      .click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 401)
      .and("include.text", unauthorized);
    cy.get(links.LOCATORS.forbidden).should("have.text", forbidden).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 403)
      .and("include.text", forbidden);
    cy.get(links.LOCATORS.notFound).should("have.text", notFound).click();
    cy.get(links.LOCATORS.response)
      .should("include.text", 404)
      .and("include.text", notFound);
  });
});
