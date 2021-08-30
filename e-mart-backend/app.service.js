const bodyParser = require("body-parser");
const api = require("./api/v1");

const { serverConfig } = require("./config").appConfig;
const db = require("./db");

//db connectivity
const connectToDatabase = () => {
  db.createMongoConnection();
  dbconnection = db.getMongoConnect();
};

const setAppMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

const apiSetup = (app) => {
  app.use("/api/v1", api);
};

module.exports = {
  connectToDatabase,
  setAppMiddleware,
  apiSetup,
};
