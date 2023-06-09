/* global chrome */

import React, { useEffect, useState } from 'react';

const App = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // this is where we would normally fetch the data from the server
    // but since we are in a content script, we will send a message to it instead
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(
        activeTab.id,
        { message: 'get_conversations' },
        (response) => {
          setConversations(response);
        }
      );
    });
  }, []); // empty array means this effect runs once on mount and not on updates

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {conversations.map((conversation, index) => (
        <button
          key={index}
          onClick={() =>
            chrome.tabs.sendMessage(activeTab.id, {
              message: 'activate_conversation',
              position: conversation.position,
            })
          }
        >
          {conversation.name}
        </button>
      ))}
    </div>
  );
};

export default App;
