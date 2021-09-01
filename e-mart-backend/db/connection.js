const mongoose = require("mongoose");
const { dbConfig } = require("../config").appConfig;

function createMongoConnection() {
  mongoose.connect(dbConfig.mongoUrl);
}

function getMongoConnect() {
  return mongoose.connection; // reference of db
}

module.exports = {
  createMongoConnection,
  getMongoConnect,
};
