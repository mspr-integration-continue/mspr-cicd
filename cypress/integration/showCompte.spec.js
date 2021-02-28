describe('Compte test', () => {
    it('First test', () => {
        cy.visit('http://localhost:8080')
        cy.get("#123456").click()
        cy.location('href').should('include', '/about/123456')
        const solde1 = cy.get('#solde')
        cy.get('input[type="number"]').type('1000').trigger('change')
        cy.get('#button-addon2').click()
        const solde2 = cy.get('#solde')
        expect(solde1).to.not.equal(solde2)
    })
})
