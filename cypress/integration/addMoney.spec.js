const { expect } = require("chai")

describe('Add money test', () => {
    it('First test', () => {
        cy.visit('http://localhost:8081/#/about/123456')
        const solde1 = cy.get('#solde')
        cy.get('input[type="number"]').type('1000').trigger('change')
        cy.get('#valider').click()
        const solde2 = cy.get('#solde')
        expect(solde1).to.not.equal(solde2)
    })
})
