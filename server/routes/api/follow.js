const FollowUp = require("./../../../controllers/follows.js");

const express = require('express');
const router = express.Router();


 
router.post('/create', Post.create)

router.get('/getfollowers', Post.getfollowers)

router.patch('/getfollowersInfo', Post.getInfoOfFollowers)

router.delete('/delete',Post.delete)

module.exports = router
