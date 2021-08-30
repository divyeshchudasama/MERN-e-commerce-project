const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');//for encryption
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    lowercase: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.pre("save", function (next) {
  let user = this;
  if (this.isModified("password") || this.isNew) {
    console.log("user data");
  } else {
    next();
  }
});
module.exports = mongoose.model("user", UserSchema);
