const productService = require("./product.service");
const getAllProduct = () => {
  return productService.getAllProduct();
};
const getOneProduct = (pData) => {
  return productService.getOneProduct(pData);
};
module.exports = {
  getAllProduct,
  getOneProduct,
};
