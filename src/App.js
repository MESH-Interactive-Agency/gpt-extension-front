import React, { useEffect, useState } from 'react';

import './css/App.css';
import Conversation from './components/Conversation';

function App() {
  const [conversations, setConversations] = useState([]);

  const fetchConversations = () => {
    window.chrome.runtime.sendMessage(
      {
        message: 'fetch_conversations',
      },
      (response) => {
        if (response.message === 'fetch_conversations_success') {
          setConversations(response.data);
        }
      }
    );
  };

  useEffect(() => {
    fetchConversations();
    window.chrome.runtime.onMessage.addListener(
      (request, sender, sendResponse) => {
        if (request.message === 'fetch_conversations_success') {
          setConversations(request.data);
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <h1>Conversations</h1>
      {conversations.map((conversation, index) => (
        <Conversation key={index} name={conversation.name} index={index} />
      ))}
      <button onClick={fetchConversations}>Refresh</button>
    </div>
  );
}

export default App;
