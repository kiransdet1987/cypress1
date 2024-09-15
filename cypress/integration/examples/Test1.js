//The below line is intelisense to provide short cut to methods after cy.
/// <reference types ="Cypress"/>  

describe('My First Test Suite case', () => {


    it('My First Test case', () => {
     cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
     cy.get(".search-keyword").type("ca")
     cy.wait(2000)
     cy.get('.product:visible').should('have.length',4) //Visible will show only visible products.  
     //Below command is aliasing since .products are repetative
     cy.get('.products').as('productLocator')
     //Parent- child chaining for finding the locators.
     cy.get('@productLocator').find('.product').should('have.length',4)
     //cy.get('li.selected').should('have.length', 3)


     //Browser console print.
     cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
    {
      console.log('sf')  // This will print in the sequence since we are handling, 
      //where as below one it will directly print since it is Javascript command
    })
     console.log('sf')  // this will print in browser-debug-console area

//Finding the element dynamically by looping and clicking on it.
     cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
      // grab text
    const textveg = $el.find('h4.product-name').text() 

    if(textveg.includes('Cashews'))
    {
      cy.wrap($el).find('button').click()
    }

// assert the logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })
   
    //const logo=cy.get('.brand')  we can't get the text like this, need to do above method
   //cy.log(cy.get('.brand').text()
    // cy.log(logo.text())


  })   
}) 
  


    

    // it('Does not do much!', () => {
    //    //second testcases
    //   })
  })