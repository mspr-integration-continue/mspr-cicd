describe('Compte test', () => {
    it('First test', () => {
        cy.visit('http://localhost:8080')
        cy.get("#123456").click()
        cy.location('href').should('include', '/about/123456')
    })
  })