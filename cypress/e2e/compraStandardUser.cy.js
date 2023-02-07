describe('Login no Sauce Labs', () => {

    beforeEach(()=>{
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce('session_id', 'session-username');
    })

    afterEach(()=>{
        cy.saveLocalStorage();
    })

    it('Realizar Login', () => {
      cy.visit('/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('.title').should('have.text', 'Products');
    })
  
    

    it('Adicionar Producto ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_link').click();
        
       })

    it('Realizar Checkout', () => {
    cy.get('[data-test="checkout"]').click()
    })


    it('Dados do cliente', () => {
        cy.get('[data-test="firstName"]').type("Bonnier");
        cy.get('[data-test="lastName"]').type("Mamani");
        cy.get('[data-test="postalCode"]').type("88106518");
       cy.get('[data-test="continue"]').click();
    })
    

it('Verificar pagamento', () => {
    cy.get('[data-test="finish"]').click()
    })


    it('finalizar e verificar pagina de confirmacion', () => {
        cy.get('.complete-header').should('be.visible')
        })


  })