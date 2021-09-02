const ProductModel = require("./product.entity");

const getAllProduct = () => {
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

  let pdata = ProductModel.find({});
  return pdata;
};
const getOneProduct = (pdata) => {
  let pOnedata = ProductModel.findOne({
    id: pdata,
  });
  return pOnedata;
};
module.exports = {
  getAllProduct,
  getOneProduct,
};
