const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');//for encryption
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// UserSchema.pre("save", function (next) {
//   let user = this;
//   if (this.isModified("password") || this.isNew) {
//     console.log("user data");
//   } else {
//     next();
//   }
// });
module.exports = mongoose.model("user", UserSchema);
