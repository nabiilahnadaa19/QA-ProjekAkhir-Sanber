class LoginPage {
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  submitButton = 'button[type="submit"]';
  alertMessage = '.oxd-alert-content';
  requiredFieldMessage = '.oxd-input-group__message';

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  login(username, password) {
    if (username) cy.get(this.usernameInput).clear().type(username);
    if (password) cy.get(this.passwordInput).clear().type(password);
    cy.get(this.submitButton).click();
  }

  autofillLogin(username, password) {
    cy.get(this.usernameInput).invoke('val', username).trigger('input');
    cy.get(this.passwordInput).invoke('val', password).trigger('input');
    cy.get(this.submitButton).click();
  }

  checkInvalidCredentials() {
    cy.get(this.alertMessage).should('contain', 'Invalid credentials');
  }

  checkRequiredField() {
    cy.get(this.requiredFieldMessage).should('contain', 'Required');
  }
}

export default new LoginPage();
