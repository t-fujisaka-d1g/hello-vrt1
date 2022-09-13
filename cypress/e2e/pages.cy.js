describe('screenshot', () => {
  const pages = require('./pages.json')

  pages.forEach(({ test_id, url }) => {
    context(test_id, () => {
      beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit(url)
      })

      it('take screenshot', () => {
        cy.wait(3000)
        cy.screenshot(test_id, { overwrite: true })
      })
    })
  })
})
