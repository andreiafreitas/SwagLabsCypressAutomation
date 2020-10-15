describe('Login', function () {
    it('should go to dashboard page after successful login', function () {
        cy.visit('https://www.saucedemo.com/index.html?fbclid=IwAR3T9iO620QE1fHpu86Day7lhMzWKisRxyI9U5z2FOYAYRtjtg9-arDkZzw')
    
        cy.pause()

        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user')
        
        cy.get('[data-test=password]').type('secret_sauce').should('have.value', 'secret_sauce')
    
        cy.get('#login-button').click()

        // confirmar que esta na pagina depois do login
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
    
    });
    it('should show error message after wrong login', function () {
        cy.visit('https://www.saucedemo.com/index.html?fbclid=IwAR3T9iO620QE1fHpu86Day7lhMzWKisRxyI9U5z2FOYAYRtjtg9-arDkZzw')
    
        cy.pause()

        // TODO: set wrong user
        cy.get('[data-test=username]').type('standard_u').should('have.value', 'standard_u')
        
        cy.get('[data-test=password]').type('secret_sauce').should('have.value', 'secret_sauce')
    
        cy.get('#login-button').click()

        // confirmar que esta na pagina de login
        cy.url().should('eq', 'https://www.saucedemo.com/index.html?fbclid=IwAR3T9iO620QE1fHpu86Day7lhMzWKisRxyI9U5z2FOYAYRtjtg9-arDkZzw')
        // confirm que aparece uma mensagem de erro
        cy.get('[data-test=error]')
    })
})

