///<reference types="cypress"/>

describe('Assertions', () => {
  it('Should', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class'); // перевірка наявності атрибуту з назвою class
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.class', 'success'); // перевірка наявності класу зі значенням success
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class', 'success');// перевірка наявності атрибуту з назвою class і значенням success

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'Column content');// не строга перевірка тексту по частині значення
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'umn content'); // не строга перевірка тексту по частині значення
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'Column content');// строга перевірка тексту
    //cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'umn content'); //fail
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.html', 'Column content');// не строга перевірка html коду по частині значення

    // cy.get('.table.table-bordered.assertion-table tr td').eq(2).should('be.empty'); // перевірка елементу на відсутність тексту
    // cy.get('.table.table-bordered.assertion-table tr td').eq(2).should('have.text', '');// перевірка елементу на відсутність тексту

    // cy.get('.table.table-bordered.assertion-table tr td').then( cells => {
    //   for(let i = 0; i<cells.length; i++){
    //     cy.wrap(cells[i]).should('have.text', 'Column content');
    //   }
    // })

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.contain', 'sfgsdegasefg');// перевірка елементу на відсутність тексту 'sfgsdegasefg'

    cy.get('th[scope="row"]').first().should('have.text', '1');
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('be.greaterThan', 0); // .then(parseFloat) - переведення тексту в тип number; .should('be.greaterThan', 0) - перевірка, що значення в елементі більше ніж 0
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('equal', 1);// .then(parseFloat) - переведення тексту в тип number; .should('be.greaterThan', 0) - перевірка, що значення в елементі дорівнює 1


    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName').type('Hello').should('have.value', 'Hello'); // перевірка того, що css property "value" має значення 'Hello'

    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default').eq(0).should('be.disabled');// перевірка того, що елемент не активний
    cy.get('.traversal-disabled .btn.btn-default').eq(1).should('be.enabled');// перевірка того, що елемент активний

    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color', 'rgb(223, 240, 216)'); // перевірка того, що елемент має css параметр 'background-color' зі значенням 'rgb(223, 240, 216)'

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color') // перевірка того, що елемент має css параметр 'background-color' 
    .and('eq', 'rgb(223, 240, 216)'); // порівняння тексту переданого з попереднього методу .should('have.css', 'background-color') зі значенням 'rgb(223, 240, 216)'

    cy.get('.assertions-link')
    .should('have.class', 'active')
    .and('have.attr', 'href') // перевірка наявності атрибуту з назвою href
    .and('include', 'cypress.io'); // перевірка наявності тексту 'cypress.io' в тексті, що переданий з попереднього методу .and('have.attr', 'href')

    cy.get('.assertions-link')
    .and('have.text', 'Cypress Docs');

    cy.get('.assertions-link')
    .should('have.text', 'Cypress Docs')
    .and('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'cypress.io');

    cy.get('h3:contains("Implicit Assertions")').should('be.visible'); // перевірка що елемент видимий
    cy.get('h3:contains("Implicit Assertionsq")').should('not.exist');// перевірка що елемент не існує на сторінці

    cy.get('[data-toggle="dropdown"]').click();
    cy.get('.dropdown-menu li').should('have.length', 17);// перевірка довжини масиву (тобто кількості елементів у списку)

    let menuTextArray = ["Querying", "Traversal", "Actions"];

    for(let i=0; i<menuTextArray.length; i++){
      cy.get('.dropdown-menu').should('contain', menuTextArray[i]);
    }
  })
})