import {} from 'cypress';

describe('Verify Home Links', () => {
  beforeEach(() => cy.visit('http://localhost:3000'))

  it('Contains "Desafio React" in the page title', () => {
    cy.title().should('contain', 'Desafio React') 
  })
});