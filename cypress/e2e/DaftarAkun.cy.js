describe('Daftar akun cermati', () => {
  it('verify create account on cermati with valid data', () => {
      cy.visit('https://www.cermati.com/app/gabung');
      cy.get('#email').clear().type('test@mail.com').should('have.value', 'test@mail.com')
      cy.get('#mobilePhone').clear().type('08123456789').should('have.value', '08123456789')
      cy.get('#password').clear().type('Admin123').should('have.value', 'Admin123')
      cy.get('#confirmPassword').clear().type('Admin123').should('have.value', 'Admin123')
      cy.get('#firstName').clear().type('test').should('have.value', 'test')
      cy.get('#lastName').clear().type('coba').should('have.value', 'coba')
      cy.get('input[name="cityAndProvince"]').clear().type('JAKARTA UTARA').wait(1000).type('{enter}').should('contain.value', 'JAKARTA UTARA')
      //cy.get('#terms-and-condition [type="checkbox"').check().should('be.checked')
      cy.get('.btn--action_kallT').click()
    })
})