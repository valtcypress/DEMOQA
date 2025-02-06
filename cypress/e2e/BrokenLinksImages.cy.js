import { brokenLinks } from "../Pages/BrokenLinksImages";
const img1 ="/images/Toolsqa.jpg"
const img2 = "/images/Toolsqa_1.jpg"
const src ="src"
const validLink="Valid Link"
const validImage="Valid image"
const brokenLink="Broken Link"
const brokenImage="Broken image"
const p="p"
const img ="img"


describe("BrokenLinks", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(brokenLinks.NAMES.elements).click();
  });
  it("Verify BrokenLinksImages Page", () => {
    cy.contains(brokenLinks.NAMES.brokenLinksLink).click();
    cy.url().should("include", brokenLinks.NAMES.brokenLinksLinkName);
    cy.get(brokenLinks.LOCATORS.heading).should("contain", brokenLinks.NAMES.brokenLinksTitle);
    cy.get(brokenLinks.LOCATORS.colMd6).find(p).should("contain", validImage).and("contain", brokenImage)
    .and("contain", brokenLink).and("contain", validLink);
    cy.get(brokenLinks.LOCATORS.colMd6).find(img).first().should("have.attr", src, img1).and("be.visible");
    cy.get(brokenLinks.LOCATORS.colMd6).find(img).eq(1).should("have.attr", src, img2);
    cy.get(brokenLinks.LOCATORS.colMd6).find(img).eq(1).should("have.value","")   
 
})
})
