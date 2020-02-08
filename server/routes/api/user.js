const User = require("./../../../controllers/users.js");
const express = require('express');
const router = express.Router();
const isAuth = require("../../validation/tokenValidation.js");

router.get("/getAllUsers", isAuth, User.getAll);
router.post("/findUser", isAuth, User.getUserByName);
router.post("/findById/", isAuth, User.findById); // doesnt return password
// router.post("/findByIdandUpdateUser", User.findByIdandUpdateUser); // returns password too
router.post("/:id/updatePhoto", isAuth, User.UpdateProfilePhoto);
router.post("/:id/updatepassword", isAuth, User.updatePass);
router.post("/:id/updateprofile", isAuth, User.updateProfile);
// router.post("/getuser", User.find);
router.post("/signup", User.signUp);
router.post("/login", User.logIn);
//router.get("/", User.enter);
router.post("/logout", User.logOut);
router.get("/refreshtoken", User.refreshToken);

module.exports = router