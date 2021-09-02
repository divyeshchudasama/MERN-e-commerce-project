const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');//for encryption
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userid: {
    type: String,
    require: true,
  },
  pid: {
    type: Number,
    require: true,
  },
  pname: {
    type: String,
    require: true,
  },
  pprice: {
    type: Number,
    require: true,
  },
  pquantity: {
    type: Number,
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
module.exports = mongoose.model("cart", CartSchema, "usercart");
