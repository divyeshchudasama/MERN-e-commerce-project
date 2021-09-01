const router = require("express").Router();
const userController = require("./user.controller");

router.post("/login", async (req, res) => {
  console.log("User Logging In");

  let emp = await userController.loginUser(req.body);
  console.log(emp);
  if (emp) {
    res.send({ message: "valid user", status: 200, details: emp });
  } else {
    res.send({ message: "invalid user", status: 403 });
  }
});

router.post("/register", async (req, res) => {
  console.log("Signing Up");
  let usr = await userController.registerUser(req.body);
  if (usr) {
    res.send({ message: "success", status: 200, details: usr });
  } else {
    res.send({ message: "invalid", status: 403 });
  }
});
router.get("/testget", (req, res) => {
  console.log("testget");
});

module.exports = router;
