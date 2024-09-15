/// <reference types ="Cypress"/>

describe('Handling Child windows Test Suite case', () => {


    it('Handling Child windows Test case', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
     cy.get("#opentab").invoke('removeAttr','target').click()
//Even though above method invokes it, still we need to give in the origin below since it is completely new domain. 
//Otherwise it is not required.
     cy.origin("https://www.qaclickacademy.com",()=>
     {
      cy.get("#navbarSupportedContent a[href*='about']").click()
      cy.get(".mt-50 h2").should('contain','QAClick Academy')

     })

// When we click any link and if it is opening in seperate tab of same window, then we can use invoke 
//method to remove target attribute and after that we will point to that particular URL.
// Even if complete url, changes better use above code. Other wise just remove target attribute if it is 
//same domain and launch it to continue the steps.

 

      
    })
})