const cartDAO = require("./cart.dao");
const storeInCart = (pData) => {
  return cartDAO.storeInCart(pData);
};
const getUserProd = (uId) => {
  return cartDAO.getUserProd(uId);
};
const deleteFromCart = (pData) => {
  return cartDAO.deleteFromCart(pData);
};

module.exports = {
  storeInCart,
  getUserProd,
  deleteFromCart,
};
