class ForgotPasswordPage {
  elements = {
    forgotPasswordLink: () => cy.contains("Forgot your password?"),
    usernameInput: () => cy.get('input[name="username"]'),
    submitButton: () => cy.get('button[type="submit"]'),
  };

  clickForgotPassword() {
    this.elements.forgotPasswordLink().click();
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }
}

module.exports = new ForgotPasswordPage();
