/// <reference types ="Cypress"/>

describe('My Fourth Test Suite case', () => {


    it('My fourth First Test case', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
     //
     cy.get('#alertbtn').click()  // this is with OK button
     cy.get('[value="Confirm"]').click() // this is with confirm button.

     //Window alerts - OK
     cy.on('window:alert',str =>
      {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
     
      //Window alerts - CONFIRM
     cy.on('window:confirm',str =>
        {
          //Mocha
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


      
    })
})