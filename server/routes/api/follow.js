const Follow = require("./../../../controllers/follows.js");

const express = require('express');
const router = express.Router();


 
router.post('/create', Follow.create)

router.get('/getfollowers', Follow.getfollowers)

router.patch('/getfollowersInfo', Follow.getInfoOfFollowers)

router.delete('/delete',Follow.delete)

module.exports = router
