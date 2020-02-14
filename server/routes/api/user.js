const User = require("./../../../controllers/users.js");
const express = require('express');
const router = express.Router();
const isAuth = require("../../validation/tokenValidation.js");
const path = require('path');

router.get("/getAllUsers", User.getAll);
router.post("/findUser", isAuth, User.getUserByName);
router.post("/findById", isAuth, User.findById); // doesnt return password
router.post("/updatePhoto", isAuth, User.UpdateProfilePhoto);
router.post("/updatepassword", isAuth, User.updatePass);
router.post("/updateprofile", isAuth, User.updateProfile);
router.get("/uploads/:name", User.getPhoto);
router.post("/signup", User.signUp);
router.post("/login", User.logIn);
router.post("/logout", User.logOut);
router.get("/refreshtoken", User.refreshToken);

module.exports = router