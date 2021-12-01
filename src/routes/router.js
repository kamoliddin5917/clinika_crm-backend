const { Router } = require("express");
const router = Router();

// Controllers
const registerController = require("../moduls/register/register");
const loginController = require("../moduls/login/login");
const ocheredController = require("../moduls/ochered/ochered");
const adminController = require("../moduls/admin/admin");
const homeController = require("../moduls/home/home");

// Middlevares
const adminAuth = require("../middlewares/admin/auth");
const clientAuth = require("../middlewares/client/auth");

router
  .get("/home", homeController.GET)
  .get("/admin/users/:userId?", adminAuth.AUTH, adminController.GET_CLIENTS)

  .post("/register", registerController.POST)
  .post("/login", loginController.POST)
  .post("/ochered", clientAuth.AUTH, ocheredController.POST)

  .delete("/submitOrder/:clientId", adminAuth.AUTH, adminController.DELETE);

module.exports = router;
