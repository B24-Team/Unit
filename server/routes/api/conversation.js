const Conversation = require("./../../../controllers/conversations.js");

const express = require('express');
const router = express.Router();


 
router.post('/chat/create', Conversation.create)

router.post('/chat/find', Conversation.find)

router.post('/chat/findAll', Conversation.findAll)

router.patch('/chat/update/:id', Conversation.update)

router.delete('/chat/delete/:id',Conversation.remove)

module.exports = router