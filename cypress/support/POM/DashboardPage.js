class DirectoryPage {
  elements = {
    menuDirectory: () => cy.contains("Directory"),
    // locator untuk kumpulan employee cards
    directoryCards: () => cy.get(".orangehrm-directory-card"),
    recordCount: () => cy.contains("Records Found"),
  };

  goToDirectory() {
    this.elements.menuDirectory().click();
  }

  getDirectoryCards() {
    return this.elements.directoryCards();
  }
}

module.exports = new DirectoryPage();
