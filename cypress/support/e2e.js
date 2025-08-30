// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Ignore application errors so Cypress doesn't fail the test
Cypress.on('uncaught:exception', (err, runnable) => {
  // kalau ada error "A message must be provided as a String or AST"
  if (err.message.includes('A message must be provided as a String')) {
    return false // mencegah Cypress fail
  }
  // untuk error lain, biarkan fail
  return true
})
