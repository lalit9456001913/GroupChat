// /frontend/components/GroupDetail.js
import React from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const GroupDetail = ({ group, messages, onSendMessage }) => {
  return (
    <div>

      <>
        <h3>{`Chat for Group: ${group.name}`}</h3>
        <MessageList messages={messages} />
        <SendMessageForm  onSendMessage={onSendMessage} />
      </>
      <p>Members: {group?.members?.length}</p>
    </div>
  );
};

export default GroupDetail;
