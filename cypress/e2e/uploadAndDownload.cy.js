import { basePage } from "../Pages/basePage";
import { checkBox } from "../Pages/checkBox";
import { uploadAndDownload } from "../Pages/uploadAndDownload";

describe("DEMO QA Upload and Download Page", () => {
  before(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elementsCategoryCardTitle).click();
    cy.get(checkBox.LOCATORS.listOfElements)
      .contains(uploadAndDownload.NAMES.uploadAndDownloadOnPanel)
      .click();
  });

  it("downloads a file", () => {
    uploadAndDownload.downloadButton().should("contain", uploadAndDownload.NAMES.downloadButtonTitle).click();
    // cy.verifyDownload('sampleFile.jpeg')
    
    cy.downloadFile(uploadAndDownload.LOCATORS.downloadFileURL, uploadAndDownload.LOCATORS.downloadFolder, uploadAndDownload.NAMES.fileName);
    // cy.readFile(`${downloadFolder}/${fileName}`)
    // cy.readFile(uploadAndDownload.LOCATORS.downloadFolder, { timeout: 10000 }).should('exist');
});

  it.only("uploads a file", () => {
    uploadAndDownload.uploadButton().should("contain", uploadAndDownload.NAMES.uploadButtonTitle);
    uploadAndDownload.uploadButton().attachFile('exampleFile.pdf');

    // Validate that the file was uploaded (depends on your app's specific response)
    cy.get('.file-name').should('contain', 'exampleFile.pdf');
  });

});
