console.log('content script is running');

function getConversations() {
  let conversations = [];
  let conversationEls = document.querySelectorAll(
    '.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative'
  );
  for (let i = 0; i < conversationEls.length; i++) {
    conversations.push({ name: conversationEls[i].textContent, position: i });
  }
  return conversations;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'get_conversations') {
    sendResponse(getConversations());
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'activate_conversation') {
    let conversationEl = document.querySelectorAll(
      'your-conversation-selector'
    )[request.position];
    conversationEl.click();
  }
});

function activateConversation(position) {
  const conversations = Array.from(
    document.querySelectorAll(
      '.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative'
    )
  );
  if (conversations[position]) {
    conversations[position].click();
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'get_conversations') {
    sendResponse(getConversations());
  } else if (request.message === 'activate_conversation') {
    activateConversation(request.position);
  }
});
