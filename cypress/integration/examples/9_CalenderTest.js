/// <reference types ="Cypress"/>
/// <reference types ="Cypress-iframe"/>

import 'cypress-iframe'

describe('Calendar TestSuite case validation', function() {

    it('My Calendar validation  First Test case', function() {
    
     const monthNumber = "6";
     const date = "15";
     const year = "2027";
     const expectedList = [monthNumber,date,year];

     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
     cy.wait(5000)
     // Select selection calender to open it.
     cy.get(".react-date-picker__inputGroup").click();
    // Select on month and year option on the top
     cy.get(".react-calendar__navigation__label").click();
     // Select on same year to select desired year 
     cy.get(".react-calendar__navigation__label").click();
    // Select year
     cy.contains("button",year).click(); 
     //Below provides all months and index starts from 0 better giver monthNumber-1.
     // Number (monthNumber) will convert string to number, then it will change 6-1=5
     cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
     // Select date field.
     cy.contains("abbr",date).click();

     //Assertion 1/8/2024
     cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
     {

        // Below code is to see the day/month/year values in console
        cy.wrap($el).invoke('val').then(function(text){
            console.log(text)
         })
         
        // invoke('val') - it will bring value date on first iteration.
         cy.wrap($el).invoke('val').should('eq',expectedList[index]);
         

     }
     
     
     
     
     )     

  })   
}) 
  


