///<reference types="cypress"/>

describe('Assertions', () => {
  it('Should', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().then(location => {
      expect(location.href).to.eq('http://localhost:8080/commands/assertions');
      expect(location.hash).to.be.empty;
      expect(location.hash).to.eq('');
      expect(location.host).to.eq('localhost:8080');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:8080');
      expect(location.pathname).to.eq('/commands/assertions');
      expect(location.port).to.eq('8080');
      expect(location.protocol).to.eq('http:');
    })

    cy.url().should('eq', 'http://localhost:8080/commands/assertions');

    cy.location('href').should('eq', 'http://localhost:8080/commands/assertions');
    cy.location('hostname').should('eq', 'localhost');

  })
})