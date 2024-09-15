/// <reference types ="Cypress"/>

describe('My Mouse Hover Test Suite case', () => {


    it('My MouseHover Test case', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     cy.get('div.mouse-hover-content').invoke('show')
     cy.contains('Top').click()
     cy.url().should('include','top')

     //The below code forcibly clicks on Top internally from DOM.
     //cy.get('div.mouse-hover-content').invoke('show')
     cy.contains('Top').click({force:true})
     cy.url().should('include','top')


  })   
}) 
