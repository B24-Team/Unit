const Messages = require("./../../../controllers/conversations.js");

const express = require('express');
const router = express.Router();


 
router.post('/chat/:chatId/message/create', Messages.create)

router.delete('/chat/:chatId/message/delete', Messages.remove)

router.patch('/chat/:chatId/message/update', Messages.update)

router.get('/chat/:chatId/message/find', Messages.find)


module.exports = router