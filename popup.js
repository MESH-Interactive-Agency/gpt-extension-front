document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      { message: 'get_conversations' },
      (response) => {
        const conversationContainer = document.createElement('div');
        conversationContainer.style.display = 'flex';
        conversationContainer.style.flexDirection = 'column';

        response.forEach((conversation) => {
          const button = document.createElement('button');
          button.textContent = conversation.name;
          button.dataset.position = conversation.position;

          button.addEventListener('click', (e) => {
            chrome.tabs.sendMessage(activeTab.id, {
              message: 'activate_conversation',
              position: e.target.dataset.position,
            });
          });

          conversationContainer.appendChild(button);
        });

        document.body.appendChild(conversationContainer);
      }
    );
  });
});
