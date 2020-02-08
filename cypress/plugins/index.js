// ***********************************************************
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  return Object.assign({}, config, {
    fixturesFolder: 'cypress/fixtures',
    pluginsFile: 'cypress/plugins/index.js',
    integrationFolder: 'cypress/features',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/index.js'
  });
};
