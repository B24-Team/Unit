const User = require("./../../../controllers/users.js");
const express = require('express');
const router = express.Router();
const isAuth = require("../../validation/tokenValidation.js");

router.get("/getAllUsers", isAuth, User.getAll);
router.post("/findUser", isAuth, User.getUserByName);
router.post("/findById/", isAuth, User.findById); // doesnt return password
// router.post("/findByIdandUpdateUser", User.findByIdandUpdateUser); // returns password too
router.post("/updatePhoto", isAuth, User.UpdateProfilePhoto);
router.post("/updatepassword", isAuth, User.updatePass);
router.post("/updateprofile", isAuth, User.updateProfile);

module.exports = router