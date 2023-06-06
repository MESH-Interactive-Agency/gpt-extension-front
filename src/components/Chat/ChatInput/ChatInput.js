import React, { useState } from 'react';
import './ChatInput.css';

function ChatInput({ handleSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      // prevent sending of empty messages
      handleSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="chat-input">
      <button onClick={handleSubmit}>Regenerate Response</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      <div className="copyright">© 2023 Your Company Name</div>
    </div>
  );
}

export default ChatInput;
