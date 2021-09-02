const router = require("express").Router();
const cartController = require("./cart.controller");

// for all product deatils

router.post("/addtocart", async (req, res) => {
  let pcart = await cartController.storeInCart(req.body);
  if (pcart) {
    res.send({ message: "success", status: 200, details: pcart });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});

router.get("/cartprod/:id", async (req, res) => {
  let prod = await cartController.getUserProd(req.params.id);
  if (prod) {
    res.send({ message: "success", status: 200, details: prod });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});

router.delete("/delete/:id", async (req, res) => {
  let del = await cartController.deleteFromCart(req.params.id);
  if (del) {
    res.send({ message: "Deleted", status: 200, details: del });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});

module.exports = router;
