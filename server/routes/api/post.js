const Post = require("./../../../controllers/posts.js");
const express = require('express');
const router = express.Router();


 
router.post('/post', Post.create)

router.get('/get', Post.find)

router.patch('/update/:id', Post.update)

router.delete('/delete/:id',Post.remove)

module.exports = router