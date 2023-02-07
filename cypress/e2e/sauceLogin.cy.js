describe('Login no Sauce Labs', () => {

  it('Realizar Login', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('have.text', 'Products');
  })

  it('Verificar componentes de lista de productos', () => {
    
   cy.get('.title').should('have.text', 'Products');
   cy.get('[data-test="product_sort_container"]').should('be.visible');
   cy.get('.shopping_cart_link').should('be.visible');
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  })
})