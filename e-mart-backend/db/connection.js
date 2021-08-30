const mongoose = require("mongoose");
const { dbConfig } = require("../config").appConfig;

function createMongoConnection() {
  mongoose.createConnection(dbConfig.mongoUrl);
}

function getMongoConnect() {
  return mongoose.connection;
}

module.exports = {
  createMongoConnection,
  getMongoConnect,
};
