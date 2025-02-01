class WebTables {
    NAMES = {
      elements: "Elements",
      webTablesLink: "Web Tables",
      webTablesTitle: "Web Tables",
      elementsLinkName: "/elements",
      webTablesLinkName: "/webtables",
    };
  
    LOCATORS = {
    heading: ".text-center",
    mainTable: ".col-md-6",
    addButton:"#addNewRecordButton",
    firstName:"#firstName",
    lastName:"#lastName",
    userEmail:"#userEmail",
    age: "#age",
    salary: "#salary",
    department: "#department",
    submit: "#submit",
    table: ".rt-table",
    search: "#searchBox",
    delete: "#delete-record-4",
    edit: "#edit-record-4",
    col: ".col",
    content:".rt-resizable-header-content"



    };
  }
  export const webTables = new WebTables();