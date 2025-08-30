import DirectoryPage from '../support/POM/DashboardPage';

describe("Directory Page - Intercept Employees", () => {
  it("should load employees via API when visiting Directory", () => {
    // Login
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Intercept API GET employees
    cy.intercept(
      "GET",
      "**/web/index.php/api/v2/directory/employees?limit=14&offset=0"
    ).as("getEmployees");

    // Navigasi ke Directory
    DirectoryPage.goToDirectory();

    // Tunggu response employees
    cy.wait("@getEmployees").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);

      const employees = interception.response.body.data;
      cy.log(`Jumlah karyawan dari API: ${employees.length}`);
    });

    // Verifikasi cards muncul di UI
    DirectoryPage.getDirectoryCards().should("have.length.greaterThan", 0);

    // Opsional: verifikasi text "Records Found" tampil
    DirectoryPage.elements.recordCount().should("contain.text", "Records Found");
  });
});
