var express = require("express");
var router = express.Router();
var user = require("../controller/user.controller.js");
//var validationRule = require("../validationRules/auth");

router.post("/createUser", user.createUser);
router.get("/getUser", user.getUser);
router.put("/upadteUser" , user.updateUser)
router.delete("/deleteUser" , user.deleteUser)

module.exports = router;  