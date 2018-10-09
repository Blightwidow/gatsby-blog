context('Accessibility', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  it('Should have correct roles', () => {
    cy.get('nav').should('have.attr', 'role', 'navigation')
    cy.get('main').should('have.attr', 'role', 'main')
    cy.get('footer').should('have.attr', 'role', 'contentinfo')
    cy.get('header').should('have.attr', 'role', 'banner')
  })
})
