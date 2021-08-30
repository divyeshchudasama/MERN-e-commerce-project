const router = require("express").Router();
const userController = require("./user.controller");

router.post("/login", (req, res) => {
  console.log("User Logged In");
  userController.loginUser(req.body);
});

router.post("/register", (req, res) => {
  console.log("Sign Up");
  //   const data = userController.registerUser(req.body);

  res.end(`<h1>Data</h1> ${data}`);
});
router.get("/testget", (req, res) => {
  console.log("testget");
});

module.exports = router;
