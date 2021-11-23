chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                hostEquals: 'attendance.moneyforward.com',
                pathEquals: '/my_page'
              },
          })],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        },
        {
          conditions: [new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                pathEquals: '/mftest.html'
              },
          })],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
