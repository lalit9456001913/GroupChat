// /src/controllers/messageController.js
const messageService = require('../../services/messages/messageService');

const sendMessage = async (req, res) => {
    try {
        const { text, group } = req.body;
        const user = req.user.userId; // Assuming userId is included in the token
        const message = await messageService.sendMessage({ text, user, group });
        res.status(201).json(message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const likeMessage = async (req, res) => {
    try {
        const messageId = req.params.messageId;
        const userId = req.user.userId; // Assuming userId is included in the token
        const result = await messageService.likeMessage(messageId, userId);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { sendMessage, likeMessage };
