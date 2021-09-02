const router = require("express").Router();
const productController = require("./product.controller");

// for all product deatils

router.get("/allproducts", async (req, res) => {
  let prod = await productController.getAllProduct();
  if (prod) {
    res.send({ message: "success", status: 200, details: prod });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});

// for one product detail

router.get("/getone/:id", async (req, res) => {
  let prod = await productController.getOneProduct(req.params.id);
  if (prod) {
    res.send({ message: "details success", status: 200, details: prod });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});

module.exports = router;
