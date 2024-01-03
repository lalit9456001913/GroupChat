// /frontend/components/SendMessageForm.js
import React, { useState } from 'react';
import MessageList from './MessageList';
const SendMessageForm = ({ onSendMessage, messages }) => {
  const [messageContent, setMessageContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({ content: messageContent });
    setMessageContent('');
  };

  return (
    <>
      <div>
        <MessageList messages={messages} />
        <div style={{ marginTop: '5px' }}>
          <form onSubmit={handleSubmit}>
            <label>
              Message:
              <input type="text" value={messageContent} onChange={(e) => setMessageContent(e.target.value)} required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </>

  );
};

export default SendMessageForm;
