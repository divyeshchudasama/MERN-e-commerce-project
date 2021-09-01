const router = require("express").Router();
const userController = require("./user.controller");

router.post("/login", (req, res) => {
  console.log("User Logging In");

  // res.json({ message: userController.loginUser(req.body) });
  let emp = userController.loginUser(req.body);
  res.send(emp.toJSON());
});

router.post("/register", async (req, res) => {
  console.log("Signing Up");
  await userController.registerUser(req.body);

  res.send("Inserted");
});
// router.get("/testget", (req, res) => {
//   console.log("testget");
// });

module.exports = router;
