// /frontend/components/MessageList.js
import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div style={styles.chatbox}>
      <h2>Chatbox</h2>
      <ul style={styles.messageList}>
        {messages?.length && messages?.map((message, index) => (
          <li
            key={index}
            style={message.sender === 'user' ? styles.userMessage : styles.otherMessage}
          >
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  chatbox: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '400px',
    // margin: '0 auto',
    marginLeft: "5px",
  },
  messageList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  userMessage: {
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '8px',
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '8px',
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
};

export default MessageList;
