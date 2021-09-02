const cartService = require("./cart.service");
const storeInCart = (pData) => {
  return cartService.storeInCart(pData);
};
const getUserProd = (uId) => {
  return cartService.getUserProd(uId);
};
const deleteFromCart = (pData) => {
  return cartService.deleteFromCart(pData);
};
module.exports = {
  storeInCart,
  getUserProd,
  deleteFromCart,
};
