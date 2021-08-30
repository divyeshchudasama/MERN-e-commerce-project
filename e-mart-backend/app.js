const express = require("express");
const app = express();

const appService = require("./app.service");

appService.connectToDatabase();
appService.setAppMiddleware(app);
appService.apiSetup(app);

module.exports = app;
