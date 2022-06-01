import { } from 'cypress';

describe('Testing network request', () => {
  beforeEach(() => cy.visit('http://localhost:3000'))

  it('Testing data from HomePage', () => {
    cy.request('/')
      .should(({ status }) => expect(status).equal(200))
  })
})