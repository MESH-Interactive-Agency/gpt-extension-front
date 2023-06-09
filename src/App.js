import React, { useEffect, useState } from 'react';
import './css/App.css';

function App() {
  const [conversationNames, setConversationNames] = useState([]);

  useEffect(() => {
    // This script will be injected into the active tab and will execute there, reading the DOM.
    const scriptContent = `
      const conversationElements = document.querySelectorAll('.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative');
      const conversationNames = Array.from(conversationElements).map(element => element.textContent);
      conversationNames;
    `;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      chrome.tabs.executeScript(
        activeTab.id,
        { code: scriptContent },
        (results) => {
          // The result of the script is the last expression evaluated, in this case 'conversationNames'.
          setConversationNames(results[0]);
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <h1>Conversation Names:</h1>
      <ul>
        {conversationNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
