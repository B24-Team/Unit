const Follow = require("./../../../controllers/follows.js");

const express = require('express');
const router = express.Router();


 
router.post('/create', Follow.create)

router.post('/getfollowers', Follow.getfollowers)

router.get('/getfollowersinfo', Follow.getInfoOfFollowers)

router.get('/getfollowinglist', Follow.getfollowingList)

router.post('/delete',Follow.delete)

module.exports = router