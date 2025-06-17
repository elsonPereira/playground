describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {
        const tags = ['Cypress', 'Javascript', 'Nodejs']   
        
        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '')
            cy.wait(500) //Think time
        })
        
        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t)
        })
    })
})