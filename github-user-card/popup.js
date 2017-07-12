window.onload = function() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
        document.querySelector('img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+tabs[0].url;
    });

}
