import ForgotPasswordPage from "../support/POM/ForgotPasswordPage";

describe("Forgot Password Flow", () => {
  it("should submit forgot password with intercept", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    ForgotPasswordPage.clickForgotPassword();
    cy.intercept("POST", "**/api/v2/auth/requestPasswordResetCode").as("resetPassword");
    ForgotPasswordPage.typeUsername("Admin");
    ForgotPasswordPage.clickSubmit();
  });
});
