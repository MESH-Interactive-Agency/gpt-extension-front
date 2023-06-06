import React, { useState } from 'react';
import './Chat.css';
import ChatOutput from './ChatOutput/ChatOutput';
import ChatInput from './ChatInput/ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // call API and get response, then add to messages
    const response = 'This is a response from the chatbot';

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: 'user' },
      { text: response, sender: 'chatbot' },
    ]);
  };

  return (
    <div className="chat">
      <ChatOutput messages={messages} />
      <ChatInput handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
