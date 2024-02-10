document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-btn');

    function updateButtonLabel(isBlurred) {
        toggleButton.textContent = isBlurred ? 'Disable Blur' : 'Enable Blur';
    }

    function sendMessage(tab) {
        chrome.storage.local.get('isBlurred', function(data) {
            const isBlurred = !data.isBlurred;
            chrome.storage.local.set({ isBlurred });
            updateButtonLabel(isBlurred);
            chrome.tabs.sendMessage(tab.id, {action: 'toggle', shouldBlur: isBlurred}, function(response) {
                console.log('Toggle message sent:', response);
            });
        });
    }

    toggleButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            sendMessage(tabs[0]);
        });
    });

    // Set the button label based on the stored blur state
    chrome.storage.local.get('isBlurred', function(data) {
        updateButtonLabel(data.isBlurred);
    });
});
