///<reference types="cypress"/>

describe('Cypress commands', () => {
  it('querying', () => {
    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#query-btn', {timeout: 10000}).should('contain', 'Button');

    cy.get('li:contains("apples")').should('contain', 'apples');

    cy.contains('apples').should('contain', 'apples');

    cy.contains('.fourth', 'apples').should('contain', 'apples');

    cy.get('#querying').contains('oranges').should('contain', 'oranges');

    cy.get('.query-form').within(() => {

      cy.get('#inputEmail').type('asdasdads');

      cy.root().then( el => {
        cy.log(el);
      })

      //cy.contains('.fourth', 'apples').should('contain', 'apples'); // do not work
    })

    cy.get('.query-form').within( form => {

      cy.get('#inputEmail').type('asdasdads');

      cy.root().then( el => {
        cy.log(el);
      })

      //cy.contains('.fourth', 'apples').should('contain', 'apples'); // do not work
    })

    //cy.root().should('contain', 'oranges'); // <html>
  })

  it.only('Traversal', () => {
    cy.visit('http://localhost:8080/commands/traversal');

    cy.get('.traversal-breadcrumb.breadcrumb').children().should('have.length', 3);
    cy.get('.traversal-breadcrumb.breadcrumb').children('.active').should('have.text', 'Data');

    cy.contains('.traversal-badge', '54').closest('ul').should('have.class', 'list-group');
    cy.contains('John').closest('table').should('have.class', 'traversal-table');

    cy.get('.traversal-list li').eq(0).should('have.text', 'tabby');
    cy.get('.traversal-list li').eq(-1).should('have.text', 'burmese');

    cy.get('.traversal-nav.nav.nav-tabs li').filter('.active').should('have.text', 'About');

    cy.get('.pagination.traversal-pagination').find('span').should('have.length', 2);

    cy.get('.traversal-ul').find('.second').next().should('have.text', 'bananas'); 

    cy.get('#eq').next().should('contain', 'To get a DOM element at a specific index, use the .eq() command.');

    cy.get('.traversal-next-all .second').next().should('have.length', 1);
    cy.get('.traversal-next-all .second').nextAll().should('have.length', 3);

    cy.get('#fruits').nextUntil('#veggies').should('have.length', 3);
    cy.get('.healthy-foods li:contains("apples")').nextUntil('.healthy-foods li:contains("corn")').should('have.length', 5);

    //.traversal-disabled button:not([disabled])  
    cy.get('.traversal-disabled button').not('[disabled]').should('be.enabled');

    cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus, porta ac consectetur ac, highlight vestibulum at eros.');

    cy.get('.traversal-cite').parents('blockquote').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    cy.get('.traversal-pills .active').siblings().should('have.length', 2);


    //cy.wrap()

    cy.get('.birds.list-group').then( list => { // cy.get('.birds.list-group') === return Cypress.Chainable<JQuery<HTMLElement>>
      // list.children().should('have.text', 'qweqwe');  
      cy.log(list.text())
      console.log(list)
      cy.wrap(list).children('li').first().should('have.text', 'Cockatiels');
    })

    console.log('qweqwe');
    console.log(cy.get('.birds.list-group'));
  })

})