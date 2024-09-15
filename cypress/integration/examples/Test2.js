/// <reference types ="Cypress"/>

describe('My Second Test Suite case', () => {


    it('My Sec First Test case', () => {
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get(".search-keyword").type("cash")
     cy.wait(2000)
     //Below command is aliasing since .products are repetative
     cy.get('.products').as('productLocator')
     cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
      const textveg = $el.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
          {
            cy.wrap($el).find('button').click()
          }
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

  })   
}) 
  


    

    // it('Does not do much!', () => {
    //    //second testcases
    //   })
  })