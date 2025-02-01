const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.globalUrl,
    setupNodeEvents(on, config) {
      // Register the downloadFile task
      on("task", { downloadFile });
    },
  },
});

