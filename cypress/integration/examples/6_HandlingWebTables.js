/// <reference types ="Cypress"/>

describe('My Handling WebTables Test Suite case', () => {


  it('My Handling WebTables Test case', () => {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //below locator is to find 2nd column where nth-child (css) is similar to index[2]
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      const text = $e1.text()

      // Check for python course
      if (text.includes("Python")) {
        //.next() will go to the next column of above selected course.
        
        cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }

    })



  })
})





