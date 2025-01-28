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
    categoryCards: ".category-cards",
    elementsPageUrlPath: "/elements",
    formsPageUrlPath: "/forms",
    alertsPageUrlPath: "/alertsWindows",
    widgetsPageUrlPath: "/widgets",
    interactionsPageUrlPath: "/interaction",
    booksPageUrlPath: "/books",
  };
}

export const basePage = new BasePage();
