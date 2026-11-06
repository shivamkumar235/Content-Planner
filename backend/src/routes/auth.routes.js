const express = require("express");
const authcontroller = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authcontroller.registeruser);

router.post("/login", authcontroller.loginuser);

// router.get("/test", (req, res) => {
//   console.log(req.cookies);

//   res.json({
//     message: "test happend",
//     cookies: req.cookies,
//   });
// });

module.exports = router;
