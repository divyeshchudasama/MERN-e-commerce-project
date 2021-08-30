const UserModel = require("./user.entity");
const loginUser = (userInfo) => {
  console.log("Login User");
  // mongoose code
};
const registerUser = (userInfo) => {
  console.log("Register User");
  //save()
  // mongodb code
  // create instance
  var newObj = new UserModel({
    userId: 1,
    username: "testUser1",
    password: "pass123",
  });
  newObj.save((err, emp) => {
    if (err) {
      console.log("Sorry! Please try again");
    } else {
      console.log("Data inserted");
    }
  });
};
module.exports = {
  loginUser,
  registerUser,
};
