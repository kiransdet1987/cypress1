/// <reference types ="Cypress"/>

describe('My First Test Suite case', () => {


    it('My First Test case', () => {

      cy.request('POST', 'http://216.10.245.166/Library/Addbook.php' ,{

        "name":"Learn Appium Automation with java",
        "isbn":"bcdsss",
        "aisle":"22s7",
        "author":"John foe"
      }).then (function(response){
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
      }) 
      
      it('My First Test case', () => {

        cy.intercept('GET', 'http://216.10.245.166/Library/GetBook.php?AuthorName=somename ')
        }) 

  }) 

}) 
  
