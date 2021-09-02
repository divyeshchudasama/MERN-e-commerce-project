const router = require("express").Router();
router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart"));

module.exports = router;
