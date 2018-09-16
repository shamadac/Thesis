describe('Register', () => {
  it('Successfully registers a user to the site', () => {
    
    const password = 'QM@[Dsg2#vf6k#4F'

    cy.server()

    cy.visit('/register')

    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#email').type('john@domain.com')
    cy.get('#username').type('johndoe')
    cy.get('#password').type(password)
    cy.get('#usertype').select('member')
    cy.get('#phone').type('1-555-555-5555')

    cy.get('#register-form button[type="submit"]')
      .click()
      .then(() => {
        cy.route({
          type: 'POST',
          url: '/api/register'
        })
      })
  })
})