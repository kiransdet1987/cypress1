/// <reference types ="Cypress"/>

describe('JWT session Test Suite case', () => {


    it('My First JWT Test case', () => {

      cy.LoginAPI().then(function()
      {
        cy.visit("https://rahulshettyacademy.com/client",
          {
            onBeforeLoad : function(window)
            {
              window.localStorage.setItem('token',Cypress.env('token'))
            }
       } )

      })

}) 

}) 
  
