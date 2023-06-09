// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'get_conversations') {
    let names = Array.from(
      document.querySelectorAll(
        '.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative'
      )
    ).map((node) => node.innerText);
    sendResponse({ conversationNames: names });
  }
});
