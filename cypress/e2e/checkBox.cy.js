// import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";

describe("DEMO QA Check Box Page", () => {
  beforeEach(() => {
    cy.visit("/checkbox");
    // cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    // checkBox.listOfElements()
    //   .contains(checkBox.NAMES.checkBoxOnPanel)
    //   .click();
    cy.viewport(1000, 400)
  });

  it("verifies all Check Box elements on the page", () => {
  checkBox.generalCheckBoxClass().should(
    "contain", checkBox.NAMES.folderTitleHome)

   checkBox.dropdownIcon().click();
   checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.folderTitleDesktop,
      checkBox.NAMES.folderTitleDocuments,
      checkBox.NAMES.folderTitleDownloads
    );

    checkBox.dropdownIcon().eq(1).click();
    checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.fileTitleNotes,
      checkBox.NAMES.fileTitleCommands
    );

    checkBox.dropdownIcon().eq(2).click();
    checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.folderTitleWorkSpace,
      checkBox.NAMES.folderTitleOffice
    );

    checkBox.dropdownIcon().eq(3).click();
    checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.fileTitleReact,
      checkBox.NAMES.fileTitleAngular,
      checkBox.NAMES.fileTitleVeu
    );

    checkBox.dropdownIcon().eq(4).click();
    checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.fileTitlePublic,
      checkBox.NAMES.fileTitlePrivate,
      checkBox.NAMES.fileTitleClassified,
      checkBox.NAMES.fileTitleGeneral
    );

    checkBox.dropdownIcon().eq(5).click();
    checkBox.generalCheckBoxClass().should(
      "contain",
      checkBox.NAMES.fileTitleWord,
      checkBox.NAMES.fileTitleExcel
    );
  });

  it("verifies ticking and unticking checkboxes", () => {
    checkBox.expandAllButton().click();
    checkBox.checkbox ({ timeout: 10000 })
      .should("exist")
      .each(($checkbox) => {
        cy.wrap($checkbox).should("not.be.checked"); // verifies all checkboxes are unchecked by default
      });

    cy.get(checkBox.LOCATORS.checkbox).first().click({ force: true }); // checks ticking on checkboxes
    cy.get(checkBox.LOCATORS.checkedIconState).should("have.length", 17);

    cy.get(checkBox.LOCATORS.resultAfterCheckingAll)
      .should("be.visible")
      .invoke("text")
      .should("include", checkBox.NAMES.selectedAllText);

    cy.get(checkBox.LOCATORS.collapseAllButton).click(); // check that all are collapsed
    cy.get(".rct-node").each(($node) => {
      cy.wrap($node).should(
        "not.have.class",
        checkBox.LOCATORS.expandedNodeState
      );
    });
  });
});
