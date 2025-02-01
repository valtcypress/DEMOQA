class UploadAndDownload {
  NAMES = {
    uploadAndDownloadOnPanel: "Upload and Download",
    downloadButtonTitle: "Download",
    fileName: "sampleFile.jpeg",
    uploadButtonTitle: "Choose File",
    
  };

  LOCATORS = {
    downloadFileURL:
      "data:image/jpeg",
    downloadFolder: "C:\Users\Tatev\Downloads",
  };

  downloadButton() {
    return cy.get("#downloadButton");
  }

  downloadFileURL() {
    return cy.get;
  }

  uploadButton() {
    return cy.get('#uploadFile')
  }

}

export const uploadAndDownload = new UploadAndDownload();
