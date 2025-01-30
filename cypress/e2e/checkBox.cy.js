import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";

describe("DEMO QA Check Box Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    cy.get(checkBox.LOCATORS.listOfElements)
      .contains(checkBox.NAMES.checkBoxOnPanel)
      .click();
  });

  it("verifies all Check Box elements on the page", () => {
    cy.get(checkBox.LOCATORS.folderHome).should(
      "contain",
      checkBox.NAMES.folderTitleHome
    );
    cy.get(checkBox.LOCATORS.dropdownNearHome).click();
    cy.get(checkBox.LOCATORS.childFolderDesktop).should(
      "contain",
      checkBox.NAMES.folderTitleDesktop,
      checkBox.NAMES.folderTitleDocuments,
      checkBox.NAMES.folderTitleDownloads
    );

    cy.get(checkBox.LOCATORS.dropdownNearDesktop).click();
    cy.get(checkBox.LOCATORS.fileNotes).should(
      "contain",
      checkBox.NAMES.fileTitleNotes,
      checkBox.NAMES.fileTitleCommands
    );

    cy.get(checkBox.LOCATORS.dropdownNearDocuments).click({ multiple: true });
    cy.get(checkBox.LOCATORS.childFolderWorkSpace).should(
      "contain",
      checkBox.NAMES.folderTitleWorkSpace,
      checkBox.NAMES.folderTitleOffice
    );

    cy.get(checkBox.LOCATORS.dropdownNearWorkSpace).click({ multiple: true });
    cy.get(checkBox.LOCATORS.fileReact).should(
      "contain",
      checkBox.NAMES.fileTitleReact,
      checkBox.NAMES.fileTitleAngular,
      checkBox.NAMES.fileTitleVeu
    );

    cy.get(checkBox.LOCATORS.dropdownNearOffice).click({ multiple: true });
    cy.get(checkBox.LOCATORS.filePublic).should(
      "contain",
      checkBox.NAMES.fileTitlePublic,
      checkBox.NAMES.fileTitlePrivate,
      checkBox.NAMES.fileTitleClassified,
      checkBox.NAMES.fileTitleGeneral
    );
    cy.get(checkBox.LOCATORS.dropdownNearDownloads).click({
      multiple: true,
    });
    cy.get(checkBox.LOCATORS.fileWord).should(
      "contain",
      checkBox.NAMES.fileTitleWord,
      checkBox.NAMES.fileTitleExcel
    );
  });

  it("verifies ticking and unticking checkboxes", () => {
    cy.get(checkBox.LOCATORS.expandAllButton).click();
    cy.get(checkBox.LOCATORS.checkbox, { timeout: 10000 })
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
