const Participant = require("./../../../controllers/participants.js");

const express = require('express');
const router = express.Router();


 
router.post('/chat/:chatId/participant/create', Participant.create)

router.delete('/chat/:chatId/participant/delete', Participant.remove)

router.patch('/chat/:chatId/participant/update', Participant.update)

router.get('/chat/:chatId/participant/find', Participant.find)

router.get('/chat/:chatId/participant/findAll', Participant.findAll)


module.exports = router