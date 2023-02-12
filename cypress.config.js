const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x3uk49",
  viewportHeight: 768,
  // viewportWidth: 1024,
  viewportWidth: 1280,
  defaultCommandTimeout: 6000,
  retries: { openMode: 0, runMode: 1 },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFilename: "Ensek Test Report-[status]",
    timestamp: "isoTime",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },


    excludeSpecPattern: ['**/cypress/e2e/2-advanced-examples', '**/cypress/e2e/1-getting-started', '**/cypress/e2e/pageObjects', '**/cypress/e2e/demoPageObjects'],
    baseUrl: 'https://ensekautomationcandidatetest.azurewebsites.net/'
  },
});
