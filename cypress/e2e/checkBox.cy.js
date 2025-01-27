import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";

describe("DEMO QA Base Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
  });

  it("verifies all Check Box elements on the page", () => {
    cy.get(checkBox.LOCATORS.listOfElements)
      .contains(checkBox.NAMES.checkBoxOnPanel)
      .click();
    cy.get(checkBox.LOCATORS.folderHome).should(
      "contain",
      checkBox.NAMES.folderTitleHome
    );
    cy.get().click();
    cy.get(checkBox.LOCATORS.childFolderDesktop).should(
      "contain",
      checkBox.NAMES.folderTitleDesktop
    );
    cy.get(checkBox.LOCATORS.childFolderDocuments).should(
      "contain",
      checkBox.NAMES.folderTitleDocuments
    );
    cy.get(checkBox.LOCATORS.childFolderDownloads).should(
      "contain",
      checkBox.NAMES.folderTitleDownloads
    );

    cy.get(checkBox.LOCATORS.dropdownNearDesktop).click();
    cy.get(checkBox.LOCATORS.fileNotes).should(
      "contain",
      checkBox.NAMES.fileTitleNotes
    );
    cy.get(checkBox.LOCATORS.fileCommands).should(
      "contain",
      checkBox.NAMES.fileTitleCommands
    );

    cy.get(checkBox.LOCATORS.dropdownNearDocuments).click({ multiple: true });
    cy.get(checkBox.LOCATORS.childFolderWorkSpace).should(
      "contain",
      checkBox.NAMES.folderTitleWorkSpace
    );
    cy.get(checkBox.LOCATORS.childFolderOffice).should(
      "contain",
      checkBox.NAMES.folderTitleOffice
    );

    cy.get(checkBox.LOCATORS.dropdownNearWorkSpace).click({ multiple: true });
    cy.get(checkBox.LOCATORS.fileReact).should(
      "contain",
      checkBox.NAMES.fileTitleReact
    );
    cy.get(checkBox.LOCATORS.fileAngular).should(
      "contain",
      checkBox.NAMES.fileTitleAngular
    );
    cy.get(checkBox.LOCATORS.fileVeu).should(
      "contain",
      checkBox.NAMES.fileTitleVeu
    );

    cy.get(checkBox.LOCATORS.dropdownNearOffice).click({ multiple: true });

    cy.get(checkBox.LOCATORS.filePublic).should(
      "contain",
      checkBox.NAMES.fileTitlePublic
    );
    cy.get(checkBox.LOCATORS.filePrivate).should(
      "contain",
      checkBox.NAMES.fileTitlePrivate
    );
    cy.get(checkBox.LOCATORS.fileClassified).should(
      "contain",
      checkBox.NAMES.fileTitleClassified
    );
    cy.get(checkBox.LOCATORS.fileGeneral).should(
      "contain",
      checkBox.NAMES.fileTitleGeneral
    );

    cy.get(checkBox.LOCATORS.dropdownNearDownloads).click({
      multiple: true,
    });
    cy.get(checkBox.LOCATORS.fileWord).should(
      "contain",
      checkBox.NAMES.fileTitleWord
    );
    cy.get(checkBox.LOCATORS.fileExcel).should(
      "contain",
      checkBox.NAMES.fileTitleExcel
    );
  });
});

// it.only("verifies that all checkboxes are unchecked by default", () => 
//     cy.get('input[type="checkbox"]').each(($checkbox) => {
//         cy.wrap($checkbox).should('not.be.checked') })
//     )

// unchecked by default
// checks clicking on Home cy.get('span[class="rct-title"]').should('contain', 'Home').click();
// it opens all checkboxes
// it closes all checkboxes
