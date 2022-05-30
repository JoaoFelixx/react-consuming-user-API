import {} from 'cypress';

describe('Verify Home Links', () => {
  it('Clicking at link from page', () => {
    cy.visit('http://localhost:3000')

    cy.contains('type').click(); 

    cy.url().should('include', '/user/id')
  })
});