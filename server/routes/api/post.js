const Post = require("./../../../controllers/posts.js");
const express = require('express');
const router = express.Router();


 
router.post('/post', Post.create)

router.post('/get', Post.find)

router.get('/getAllPosts', Post.findAll)

router.post('/update', Post.update)

router.post('/delete',Post.remove)

module.exports = router