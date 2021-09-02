const CartModel = require("./cart.entity");

const storeInCart = async (pData) => {
  var cartObj = new CartModel({
    userid: `${pData.userid}`,
    pid: `${pData.pid}`,
    pname: `${pData.pname}`,
    pprice: `${pData.pprice}`,
    pquantity: `${pData.pquantity}`,
  });
  return await cartObj.save();
};

const getUserProd = (uId) => {
  let items = CartModel.find({
    userid: uId,
  });
  return items;
};

const deleteFromCart = (pData) => {
  let item = CartModel.deleteOne({
    _id: pData,
  });
  return item;
};
module.exports = {
  storeInCart,
  getUserProd,
  deleteFromCart,
};
