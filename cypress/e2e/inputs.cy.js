describe('Input Fields', ()=> {
    
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('deve preencher o campo texto', ()=> {
        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('input[placeholder="John Doe"]')
            .type('Elson Pereira de Brito')
        
        cy.get('input[name="email"]')
            .type('elson@robot-mail.com')

        cy.get('input[name="number"]')
            .type('2024')
            
        cy.get('input[name="date"]')
            .type('2024-10-06')
    })

})