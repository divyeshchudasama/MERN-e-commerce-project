const userService = require("./user.service");

const loginUser = (userDetails) => {
  return userService.loginUser(userDetails);
};
const registerUser = (userDetails) => {
  return userService.registerUser(userDetails);
};
module.exports = {
  loginUser,
  registerUser,
};
