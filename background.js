// Inject content script into all tabs where url is available and does not start with 'chrome://'
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ isBlurred: false }); // Set initial blur state
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            if (tab.url && !tab.url.startsWith('chrome://')) {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['content.js'],
                });
            }
        });
    });
});

// Toggle blur state when extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get('isBlurred', (data) => {
        const isBlurred = !data.isBlurred;
        chrome.storage.local.set({ isBlurred });
        chrome.tabs.sendMessage(tab.id, { action: 'toggle', shouldBlur: isBlurred });
    });
});

// Apply blur state on active tab changes
chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.storage.local.get({ isBlurred: false }, function(data) {
        chrome.tabs.sendMessage(activeInfo.tabId, { action: 'toggle', shouldBlur: data.isBlurred });
    });
});

// Background script for BlurIT is running.
console.log("Background script for BlurIT is running.");