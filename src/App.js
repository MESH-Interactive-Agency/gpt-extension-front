import React, { useState } from 'react';
import './css/App.css';

const App = () => {
  const [conversationNames, setConversationNames] = useState([]);

  const getConversations = () => {
    window.chrome.runtime.sendMessage(
      { message: 'get_conversations' },
      function (response) {
        console.log(response); // log the response to the console
        if (response && response.data) {
          setConversationNames(response.data);
        } else {
          console.error('Failed to fetch conversation names');
        }
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Conversation Names:</p>
        <button onClick={getConversations}>Fetch Conversations</button>
        <ul>
          {conversationNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
