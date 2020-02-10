const Follow = require("./../../../controllers/follows.js");

const express = require('express');
const router = express.Router();


 
router.post('/create', Follow.create)

router.get('/getfollowers', Follow.getfollowers)

router.get('/getfollowersInfo', Follow.getInfoOfFollowers)

router.get('/:id/getfollowinglist', Follow.getfollowingList)

router.delete('/delete',Follow.delete)

module.exports = router