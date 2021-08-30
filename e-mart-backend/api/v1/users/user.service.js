const userDAO = require("./user.dao");
const loginUser = (userDetails) => {
  return userDAO.loginUser(userDetails);
};
const registerUser = (userDetails) => {
  return userDAO.registerUser(userDetails);
};
module.exports = {
  loginUser,
  registerUser,
};
