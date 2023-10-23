///<reference types="cypress"/>

describe('Assertions', () => {
  it('Should', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class');
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.class', 'success');
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class', 'success');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'Column content');
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'umn content'); // пошук по частині значення
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'Column content');
    //cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'umn content'); //fail
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.html', 'Column content');

    // cy.get('.table.table-bordered.assertion-table tr td').eq(2).should('be.empty');
    // cy.get('.table.table-bordered.assertion-table tr td').eq(2).should('have.text', '');

    // cy.get('.table.table-bordered.assertion-table tr td').then( cells => {
    //   for(let i = 0; i<cells.length; i++){
    //     cy.wrap(cells[i]).should('have.text', 'Column content');
    //   }
    // })

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.contain', 'sfgsdegasefg');

    cy.get('th[scope="row"]').first().should('have.text', '1');
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('be.greaterThan', 0);
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('equal', 1);


    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName').type('Hello').should('have.value', 'Hello');

    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default').eq(0).should('be.disabled');
    cy.get('.traversal-disabled .btn.btn-default').eq(1).should('be.enabled');

    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color', 'rgb(223, 240, 216)');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color')
    .and('eq', 'rgb(223, 240, 216)');

    cy.get('.assertions-link')
    .should('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'cypress.io');

    cy.get('.assertions-link')
    .and('have.text', 'Cypress Docs');

    cy.get('.assertions-link')
    .should('have.text', 'Cypress Docs')
    .and('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'cypress.io');

    cy.get('h3:contains("Implicit Assertions")').should('be.visible');
    cy.get('h3:contains("Implicit Assertionsq")').should('not.exist');

    cy.get('[data-toggle="dropdown"]').click();
    cy.get('.dropdown-menu li').should('have.length', 17);

    let menuTextArray = ["Querying", "Traversal", "Actions"];

    for(let i=0; i<menuTextArray.length; i++){
      cy.get('.dropdown-menu').should('contain', menuTextArray[i]);
    }
  })
})