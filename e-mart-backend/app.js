const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const appService = require("./app.service");

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

appService.connectToDatabase();
appService.setAppMiddleware(app);
appService.apiSetup(app);

module.exports = app;
