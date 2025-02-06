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
    uploadAndDownload
      .downloadButton()
      .should("contain", uploadAndDownload.NAMES.downloadButtonTitle)
      .click();
    cy.downloadFile(
      uploadAndDownload.LOCATORS.downloadFileURL,
      uploadAndDownload.LOCATORS.downloadFolder,
      uploadAndDownload.NAMES.fileName
    );
  });

  it("uploads a file", () => {
    uploadAndDownload
      .uploadButton()
      .attachFile(uploadAndDownload.NAMES.attechedFileName1);
    uploadAndDownload
      .uploadedFilePath()
      .should("contain", uploadAndDownload.NAMES.attechedFileName1);

    uploadAndDownload
      .uploadButton()
      .attachFile(uploadAndDownload.NAMES.attechedFileName2);
    uploadAndDownload
      .uploadedFilePath()
      .should("contain", uploadAndDownload.NAMES.attechedFileName2); //upload another file
  });
});
