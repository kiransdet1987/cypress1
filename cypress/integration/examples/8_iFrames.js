/// <reference types ="Cypress"/>
/// <reference types ="Cypress-iframe"/>

import 'cypress-iframe'

describe('Frame Test Suite case validation', function() {

    it('My Iframe validation  First Test case', function() {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.frameLoaded("#courses-iframe")
      //.eq(0) - is index based selection.
     cy.iframe().find("a[href*='mentorship']").eq(0).click()
     cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
      

  })   
}) 
  


