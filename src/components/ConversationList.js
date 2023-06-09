import React, { useEffect, useState } from 'react';
import Conversation from './Conversation';

function ConversationList() {
  const [conversations, setConversations] = useState([]);

  // We'll use useEffect to mimic componentDidMount and componentDidUpdate
  useEffect(() => {
    // This is where you'd make the API call to get the conversations
    // For now, we'll just manually set some dummy data
    setConversations([
      { id: 1, name: 'Conversation 1' },
      { id: 2, name: 'Conversation 2' },
      // Add more dummy data as needed
    ]);
  }, []); // Passing an empty array as the second argument to useEffect makes it run on mount only

  return (
    <div>
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} data={conversation} />
      ))}
    </div>
  );
}

export default ConversationList;
