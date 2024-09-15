/// <reference types ="Cypress"/>

describe('My Third Test Suite case', () => {


    it('My Third First Test case', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     //Testing the check boxes concept.
     cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
     cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
     //Selecting multiple check boxes.
     cy.get('input[type="checkbox"]').check(['option2','option3'])

     // Static drop down handling
      cy.get('select').select('option2').should('have.value','option2')

    // Dynamic drop down handling
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text()=="India")
        {
        cy.wrap($el).click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')
    //Visibility and hiding 
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
 
    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')
  })
})