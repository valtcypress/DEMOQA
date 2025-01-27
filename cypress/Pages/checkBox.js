import { file } from "tmp";

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
  };

  LOCATORS = {
    listOfElements: ".element-list",
    folderHome:
      "#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-title",
    dropdownNearHome: ".rct-collapse",
    childFolderDesktop:
      ".rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-title",
    childFolderDocuments:
      ".rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-title",
    childFolderDownloads:
      ".rct-node-expanded > ol > :nth-child(3) > .rct-text > label > .rct-title",
    dropdownNearDesktop:
      ".rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse",
    fileNotes:
      ":nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-title",
    fileCommands:
      ":nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-title",
    dropdownNearDocuments:
      ".rct-node-expanded > ol > :nth-child(2) > .rct-text > .rct-collapse",
    childFolderWorkSpace:
      ":nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-title",
    childFolderOffice:
      ":nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-title",
    dropdownNearWorkSpace:
      ":nth-child(2) > ol > :nth-child(1) > .rct-text > .rct-collapse",
    fileReact:
      ":nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-title",
    fileAngular:
      ":nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-title",
    fileVeu:
      ":nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(3) > .rct-text > label > .rct-title",
    dropdownNearOffice:
      ":nth-child(2) > ol > :nth-child(2) > .rct-text > .rct-collapse",
    filePublic:
      ":nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-title",
    filePrivate:
      ":nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-title",
    fileClassified:
      ":nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(3) > .rct-text > label > .rct-title",
    fileGeneral:
      ":nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(4) > .rct-text > label > .rct-title",
    dropdownNearDownloads: ":nth-child(3) > .rct-text > .rct-collapse",
    fileWord:
      ":nth-child(3) > ol > :nth-child(1) > .rct-text > label > .rct-title",
    fileExcel:
      ":nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-title",
  };
}

export const checkBox = new CheckBox();
