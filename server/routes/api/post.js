const Post = require("./../../../controllers/posts.js");
const express = require('express');
const router = express.Router();


 
router.post('/post', Post.create)

router.post('/get', Post.find)

router.get('/getAllPosts', Post.findAll)

router.patch('/update/:id', Post.update)

router.delete('/delete/:id',Post.remove)

module.exports = router