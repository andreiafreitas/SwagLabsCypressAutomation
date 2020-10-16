describe('Inventory', function () {
    it('should ', function () {

        cy.visit('https://www.saucedemo.com/inventory.html', { onBeforeLoad: (win) => { win.sessionStorage.clear() } });
    
        // dropdown select low to high
        cy.get('.product_sort_container').select('Price (low to high)')
        
        // select first item 
        cy.get('#item_2_img_link').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=2')

        // check go back botton
        cy.get('.inventory_details_back_button').click({force: true})

        // select sauce labs Backpack and click on it to see more info
        cy.get('#item_4_img_link').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')

        // add to cart 
        cy.get('.btn_primary.btn_inventory').click()
    
        // check the cart 
        cy.get('.shopping_cart_container').click()

        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    
    })
})
