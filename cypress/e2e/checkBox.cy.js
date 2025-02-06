// import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";

describe("DEMO QA Check Box Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    checkBox.listOfElements().contains(checkBox.NAMES.checkBoxOnPanel).click();
    cy.viewport(1000, 400);
  });

  it("verifies all Check Box elements on the page", () => {
    checkBox
      .generalCheckBoxClass()
      .should("contain", checkBox.NAMES.folderTitleHome);

    checkBox.dropdownIcon().click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.folderTitleDesktop,
        checkBox.NAMES.folderTitleDocuments,
        checkBox.NAMES.folderTitleDownloads
      );

    checkBox.dropdownIcon().eq(1).click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.fileTitleNotes,
        checkBox.NAMES.fileTitleCommands
      );

    checkBox.dropdownIcon().eq(2).click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.folderTitleWorkSpace,
        checkBox.NAMES.folderTitleOffice
      );

    checkBox.dropdownIcon().eq(3).click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.fileTitleReact,
        checkBox.NAMES.fileTitleAngular,
        checkBox.NAMES.fileTitleVeu
      );

    checkBox.dropdownIcon().eq(4).click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.fileTitlePublic,
        checkBox.NAMES.fileTitlePrivate,
        checkBox.NAMES.fileTitleClassified,
        checkBox.NAMES.fileTitleGeneral
      );

    checkBox.dropdownIcon().eq(5).click();
    checkBox
      .generalCheckBoxClass()
      .should(
        "contain",
        checkBox.NAMES.fileTitleWord,
        checkBox.NAMES.fileTitleExcel
      );
  });

  it("verifies ticking and unticking checkboxes", () => {
    checkBox.expandAllButton().click();
    checkBox
      .checkbox({ timeout: 10000 })
      .should("exist")
      .each(($checkbox) => {
        cy.wrap($checkbox).should("not.be.checked"); // verifies all checkboxes are unchecked by default
      });

    checkBox.checkbox().first().click({ force: true }); // checks ticking on checkboxes
    checkBox.checkedIconState().should("have.length", 17);

    checkBox
      .resultAfterCheckingAll()
      .should("be.visible")
      .invoke("text")
      .should("include", checkBox.NAMES.selectedAllText);

    checkBox.collapseAllButton().click(); // check that all are collapsed
    checkBox.nodeWholeClass().each(($node) => {
      cy.wrap($node).should("not.have.class", checkBox.NAMES.expandedClassName);
    });
  });
});
