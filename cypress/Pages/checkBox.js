class CheckBox {
  NAMES = {
    checkBoxOnPanel: "Check Box",
    checkBoxPageTitle: "Check Box",
    folderTitleHome: "Home",
    folderTitleDesktop: "Desktop",
    folderTitleDocuments: "Documents",
    folderTitleDownloads: "Downloads",
    fileTitleNotes: "Notes",
    fileTitleCommands: "Commands",
    folderTitleWorkSpace: "WorkSpace",
    folderTitleOffice: "Office",
    fileTitleReact: "React",
    fileTitleAngular: "Angular",
    fileTitleVeu: "Veu",
    fileTitlePublic: "Public",
    fileTitlePrivate: "Private",
    fileTitleClassified: "Classified",
    fileTitleGeneral: "General",
    fileTitleWord: "Word File.doc",
    fileTitleExcel: "Excel File.doc",
    selectedAllText:
      "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile",
    expandedClassName: "rct-node-expanded",
  };

  listOfElements() {
    return cy.get(".element-list");
  }

  generalCheckBoxClass() {
    return cy.get(".rct-title");
  }

  dropdownIcon() {
    return cy.get(".rct-collapse-btn");
  }

  expandAllButton() {
    return cy.get(".rct-option-expand-all");
  }
  checkbox() {
    return cy.get(".rct-checkbox");
  }
  checkedIconState() {
    return cy.get(".rct-icon-check");
  }

  resultAfterCheckingAll() {
    return cy.get("#result");
  }

  collapseAllButton() {
    return cy.get(".rct-option-collapse-all");
  }
  nodeWholeClass() {
    return cy.get(".rct-node");
  }
}

export const checkBox = new CheckBox();
