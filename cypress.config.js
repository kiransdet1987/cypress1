const { defineConfig } = require("cypress");

module.exports = defineConfig({


  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  env:{
    url: 'https://rahulshettyacademy.com',
    userId: "rahul",
    password: "123242"
  },
  //if anytest fails, how many times we can retries..
  retries:{
    runMode: 1,
  },
  // Is used to integrate with cloud.cypress.io to run and see the reports. 
  projectId: "npz9z4",
  e2e: {
    setupNodeEvents(on, config){
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
