const { defineConfig } = require("cypress");


module.exports = defineConfig({
 e2e: {
   baseUrl: "https://dev.labs.wizeline.io",
   setupNodeEvents(on, config) {
     // implement node event listeners here
   },
 },
});
