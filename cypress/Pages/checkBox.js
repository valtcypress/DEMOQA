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
  };

  listOfElements(){
    return cy.get (".element-list")
  }

  generalCheckBoxClass(){
    return cy.get (".rct-title")
  }

  dropdownIcon(){
    return cy.get (".rct-collapse-btn")
  }

  expandAllButton(){
    return cy.get(".rct-option-expand-all")
  }
  checkbox(){
return cy.get(".rct-checkbox")
  }

  LOCATORS = {
    

    checkedIconState: ".rct-icon-check",
    resultAfterCheckingAll: "#result",
    collapseAllButton: ".rct-option-collapse-all",
    expandedNodeState: "rct-node-expanded",
  };
}

export const checkBox = new CheckBox();
