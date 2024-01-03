// /src/services/messageService.js
const Message = require('../../models/Message');

const sendMessage = async (messageData) => {
  try {
    console.log("message data----", messageData)
    const message = new Message(messageData);
    await message.save();
    return message;
  } catch (error) {
    throw error;
  }
};

const likeMessage = async (messageId, userId) => {
  try {
    // Your logic to handle liking a message here
    return { message: 'Message liked successfully' };
  } catch (error) {
    throw error;
  }
};

module.exports = { sendMessage, likeMessage };
