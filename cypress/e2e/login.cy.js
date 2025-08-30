import LoginPage from '../support/POM/LoginPage';

describe('OrangeHRM Login Feature', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('TC01 - Login valid (Positive)', () => {
    cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary', {
      statusCode: 200,
      body: {
        success: true,
        data: [
          { id: 1, name: 'Admin', role: 'HR' },
          { id: 2, name: 'User', role: 'Employee' }
        ]
      }
    }).as('dashboard');

    LoginPage.login('Admin', 'admin123');
    cy.wait('@dashboard').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/dashboard');
  });

  it('TC02 - Login invalid username (Negative)', () => {
    cy.intercept('GET', '**/core/i18n/messages', {
      statusCode: 200,
      body: { success: false, message: 'Invalid credentials' }
    }).as('loginFail');

    LoginPage.login('wronguser', 'admin123');
    cy.wait('@loginFail');
    LoginPage.checkInvalidCredentials();
  });

  it('TC03 - Login invalid password (Negative)', () => {
    cy.intercept('GET', '**/core/i18n/messages', {
      statusCode: 200,
      body: { success: false, message: 'Invalid credentials' }
    }).as('loginFail');

    LoginPage.login('Admin', 'wrongpass');
    cy.wait('@loginFail');
    LoginPage.checkInvalidCredentials();
  });

  it('TC04 - Login field kosong (Negative)', () => {
    LoginPage.login('', '');
    LoginPage.checkRequiredField();
  });

  it('TC05 - Login autofill (Positive)', () => {
    cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary', {
      statusCode: 200,
      body: {
        success: true,
        data: [
          { id: 1, name: 'Admin', role: 'HR' },
          { id: 2, name: 'User', role: 'Employee' }
        ]
      }
    }).as('dashboard');

    LoginPage.autofillLogin('Admin', 'admin123');
    cy.wait('@dashboard').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/dashboard');
  });
});
