// /src/routes/message.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages/messageController');

// Send a message
router.post('/send-message', messageController.sendMessage);

// Like a message
router.post('/like-message/:messageId', messageController.likeMessage);

module.exports = router;
