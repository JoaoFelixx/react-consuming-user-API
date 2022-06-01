import { } from 'cypress';

describe('Checking filter input', () => {
  beforeEach(() => cy.visit('http://localhost:3000'))

  it('Testing things', () => {
    cy.get("input[type=search]")
      .type('somebody').should('have.value', 'somebody');
  })
});