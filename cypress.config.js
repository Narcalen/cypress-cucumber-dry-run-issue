const {defineConfig} = require('cypress')

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", browserify.default(config));

    allureWriter(on, config);

    return config
}


module.exports = defineConfig({
    video: false,
    chromeWebSecurity: false,
    e2e: {
        baseUrl: 'https://google.com',
        specPattern: 'cypress/features/**/*.{feature,features}',
        setupNodeEvents
    },
})
