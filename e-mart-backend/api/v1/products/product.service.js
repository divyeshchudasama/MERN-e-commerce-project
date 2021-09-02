const productDAO = require("./product.dao");
const getAllProduct = () => {
  return productDAO.getAllProduct();
};
const getOneProduct = (pData) => {
  return productDAO.getOneProduct(pData);
};
module.exports = {
  getAllProduct,
  getOneProduct,
};
