/// <reference types ="Cypress"/>

describe('Handling Child windows Test Suite case', () => {


    it('Handling Child windows Test case', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
     cy.get("#opentab").then(function(el)
    {
        const url = el.prop('href')
        cy.visit(url)  // points to new URL:- qaclickacademy.com

        cy.origin(url,()=>
            {
             cy.get("div.sub-menu-bar a[href*='about']").click()
             cy.get(".mt-50 h2").should('contain','QAClick Academy')
       
            })


// When we click on any link and if it is opening in seperate window rather than in the same window 
//followed by tab, then use href attribute to resolve promise and keep moving.

    })
     


      
    })
})