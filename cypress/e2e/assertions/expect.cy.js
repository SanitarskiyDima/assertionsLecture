///<reference types="cypress"/>

describe('Assertions', () => {

  it('Expect', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3).then( tableRow => {
      expect(tableRow).to.have.attr('class');
      expect(tableRow).to.have.class('success');

      expect(tableRow.attr('class')).to.eq('success');
      expect(tableRow.attr('class')).to.eql('success');
      expect(tableRow.attr('class')).to.eqls('success');
      expect(tableRow.attr('class')).to.equal('success');
      expect(tableRow.attr('class')).to.equals('success');

      const obj = {
        name: 'Dima',
        someParam: {
          param1: 123
        }
      }

      const obj2 = {
        name: 'Dima',
        someParam: {
          param1: 123
        }
      }

      //expect(obj).to.eq(obj2);
      //expect(obj).to.equal(obj2);
      //expect(obj).to.equals(obj2);

      expect(obj).to.eql(obj2);
      expect(obj).to.eqls(obj2);


      const obj3 = obj;

      expect(obj).to.eq(obj3);
      expect(obj).to.equal(obj3);
      expect(obj).to.equals(obj3);
      expect(obj).to.eql(obj3);
      expect(obj).to.eqls(obj3);

    })
    
    cy.get('.table.table-bordered.assertion-table tr td').eq(4).then( tableCell => {
      expect(tableCell).to.have.text('Column content');
      expect(tableCell).to.have.html('Column content');
      expect(tableCell).to.contain('Column content');
      expect(tableCell).to.contain(' content');
      expect(tableCell.text()).to.include('Column content');
      expect(tableCell.text()).to.include(' content');
      expect(tableCell).to.not.contain('qwe12');
    })

    cy.get('th[scope="row"]').first().then( tableCell => {
      expect(tableCell).to.contain('1');

      expect(parseFloat(tableCell.text())).to.be.lessThan(2);
      expect(parseFloat(tableCell.text())).to.be.greaterThan(0);
    });

  })

})