import {} from 'cypress';

describe('Verify data from api at Home', () => {
  
  beforeEach(() => cy.visit('http://localhost:3000/'))

  it('Contains "React Desafio" in the page title', () => {
    cy.title().should('contain', 'React Desafio') 
  })


});