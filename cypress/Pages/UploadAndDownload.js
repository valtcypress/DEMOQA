class UploadAndDownload {
  NAMES = {
    uploadAndDownloadOnPanel: "Upload and Download",
    downloadButtonTitle: "Download",
    fileName: "sampleFile.jpeg",
    uploadButtonTitle: "Choose File",
    attechedFileName1: "image (3).png",
    attechedFileName2: "menu.pdf",
  };

  LOCATORS = {
    downloadFileURL: "https://demoqa.com/upload-download",
    downloadFolder: "cypress/downloads",
  };

  downloadButton() {
    return cy.get("#downloadButton");
  }

  downloadFileURL() {
    return cy.get;
  }

  uploadButton() {
    return cy.get("#uploadFile");
  }

  uploadedFilePath() {
    return cy.get("#uploadedFilePath");
  }
}

export const uploadAndDownload = new UploadAndDownload();
