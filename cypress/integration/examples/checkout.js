describe('Checkout', function () {
    it('should checkout', function () {

        cy.visit('https://www.saucedemo.com/inventory.html', { onBeforeLoad: (win) => { win.sessionStorage.clear() } });

        cy.get('#item_4_img_link').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')

        // add to cart 
        cy.get('.btn_primary.btn_inventory').click()
    
        // check the cart 
        cy.get('.shopping_cart_container').click()

        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')

        cy.get('.btn_action.checkout_button').click()
    
        cy.get('[data-test=firstName]').should('not.have.value')

        cy.get('[value=CONTINUE]').click()

        cy.get('[data-test=error]')

        cy.get('[data-test=firstName]').type('Andreia').should('have.value', 'Andreia')
        
        cy.get('[data-test=lastName]').type('Freitas').should('have.value', 'Freitas')
    
        cy.get('[data-test=postalCode]').type('WC1H').should('have.value', 'WC1H')

        cy.get('[value=CONTINUE]').click()

        // confirmar que esta na pagina de checkout2
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')

        cy.get('.btn_action.cart_button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')

    
 

    
    })
})