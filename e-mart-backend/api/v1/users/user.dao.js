const UserModel = require("./user.entity");
const loginUser = async (userInfo) => {
  // mongoose code
  await UserModel.find({
    email: `${userInfo.email}`,
    password: `${userInfo.password}`,
  }).exec((err, emp) => {
    if (err) {
      console.log("Something wrong");
    } else {
      console.log(emp, "dao1");
      return emp;
    }
  });
};
const registerUser = async (userInfo) => {
  // create instance
  console.log(userInfo, "dvs");
  var newObj = new UserModel({
    firstname: `${userInfo.firstname}`,
    lastname: `${userInfo.lastname}`,
    email: `${userInfo.email}`,
    password: `${userInfo.password}`,
  });
  await newObj.save((err, emp) => {
    if (err) {
      console.log("Sorry! Please try again");
    } else {
      console.log("Data inserted");
      console.log(emp, "emp");
      return emp;
    }
  });
};
module.exports = {
  loginUser,
  registerUser,
};
