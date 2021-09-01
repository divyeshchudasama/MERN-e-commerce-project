const UserModel = require("./user.entity");

const loginUser = (userInfo) => {
  // mongoose code
  // return new Promise((resolve, reject) => {
  //   UserModel.findOne(
  //     { email: userInfo.email, password: userInfo.password },
  //     function (err, user) {
  //       if (err) {
  //         reject({ message: "Internal Server Error", status: 500 });
  //       } else if (user) {
  //         console.log(user);
  //         // password is correct or not
  //         resolve({ message: "valid user", status: 200, details: user });
  //       } else {
  //         reject({ message: "invalid user", status: 403 });
  //       }
  //     }
  //   );
  // });

  let userData = UserModel.findOne({
    email: `${userInfo.email}`,
    password: `${userInfo.password}`,
  });
  return userData;
};
const registerUser = async (userInfo) => {
  // create instance
  var newObj = new UserModel({
    firstname: `${userInfo.firstname}`,
    lastname: `${userInfo.lastname}`,
    email: `${userInfo.email}`,
    password: `${userInfo.password}`,
  });
  return await newObj.save();
};
module.exports = {
  loginUser,
  registerUser,
};
