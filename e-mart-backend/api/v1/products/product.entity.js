const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');//for encryption
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
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
module.exports = mongoose.model("product", ProductSchema, "products");
