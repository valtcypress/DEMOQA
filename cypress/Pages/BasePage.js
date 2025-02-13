class BasePage {
  NAMES = {
    elementsCategoryCardTitle: "Elements",
    formsCategoryCardTitle: "Forms",
    alertsCategoryCardTitle: "Alerts, Frame & Windows",
    widgetsCategoryCardTitle: "Widgets",
    interactionsCategoryCardTitle: "Interactions",
    booksCategoryCardTitle: "Book Store Application",
  };

  LOCATORS = {
    elementsPageUrlPath: "/elements",
    formsPageUrlPath: "/forms",
    alertsPageUrlPath: "/alertsWindows",
    widgetsPageUrlPath: "/widgets",
    interactionsPageUrlPath: "/interaction",
    booksPageUrlPath: "/books",
  };

  categoryCards() {
    return cy.get(".category-cards");
  }
}

export const basePage = new BasePage();
