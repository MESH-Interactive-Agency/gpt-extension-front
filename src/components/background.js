chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'get_conversations') {
    chrome.tabs.executeScript({
      code: `Array.from(document.querySelectorAll('.flex-1.text-ellipsis.max-h-5.overflow-hidden.break-all.relative')).map((node) => node.innerText)`
    }, (result) => {
      sendResponse({data: result[0]});
    });
    return true; // indicates that the response will be sent asynchronously
  }
});
