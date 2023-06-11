chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'get_conversations') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: function () {
            const elements = document.querySelectorAll(
              '.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative'
            );
            const conversationNames = Array.from(
              elements,
              (el) => el.textContent
            );
            return conversationNames;
          },
        },
        (results) => {
          sendResponse(results[0].result);
        }
      );
    });
    return true; // Will respond asynchronously.
  }
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'get_conversations') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getConversations,
      });
    });
  } else if (request.message === 'activate_conversation') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: activateConversation,
        args: [request.index],
      });
    });
  }
});

function activateConversation(index) {
  const conversationElements = document.querySelectorAll(
    '.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative'
  );
  conversationElements[index].click();
  return { data: 'Conversation activated.' };
}
