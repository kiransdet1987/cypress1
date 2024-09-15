/// <reference types ="Cypress"/>

import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"


describe('My Second Test Suite case', function () {

  before(function () {
    cy.fixture('example').then(function (data) {
      // this refers to entire class or global variable  availability of data and we assign the data from fixture to it.
      this.data = data
    })
  })


  it('My Sec First Test case', function () {
    //Cypress.config('defaultCommandTimeout',8000)  This is at the spec level. 
    const homePage = new HomePage()
    const productPage = new ProductPage()
    
    cy.visit(Cypress.env('url')+"/angularpractice/")

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    // The above name should reflect in below one.
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')  // checking the attribute validation with min length as 2.
    //    cy.pause() it will pause the scripts wheere we can see it in runner view
    homePage.getEntrepreneaur().should('be.disabled')

    //cy.get(':nth-child(2) > .nav-link').click().debug() it will debug from this point in runner view
    homePage.getShopTab().click()
    //Cypress.config('defaultCommandTimeout',8000)  This is applicable from here similar to Explicit Timeout in selenium

    //Iterating through the loop to select Blacberry and Nokia.
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })


    productPage.checkOutButton().click()

    //mkae sum of two products R. 65000, R. 50000/-
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
      //cy.log($el.text())
      const actualText =$el.text()
      var res= actualText.split(" ")
      // after spliting , the value is stored on index 1. and Trim will remove spaces before or after number.
      res=res[1].trim()
     // cy.log(res)
      //convert string into number to add.
      sum= Number(sum)+Number(res)
    }).then(function(){
      cy.log(sum)
    })
    // Compare the above sum with the actual sum that is displayed.
    cy.get('h3 strong').then(function(element){
      const amount =element.text()
      var res= amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)
    })




    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
  {
    const actualText = element.text()
    expect(actualText.includes("Success")).to.be.true
  })


  //Excel reading code

cy.get(".order-summary button").contains("Excel").click()
const filePath =Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_anshika.xlsx"
  cy.task('excelToJsonConverter',filePath).then(function(result)
{
  cy.log(result)
  cy.log(result.data[1].A)
  expect(productName).to.equal(result.data[1].B)

})

// content is available are not in excel
cy.readFile(filePath).then(function(text){
  expect(text).to.include(productName)
})

  })
})


