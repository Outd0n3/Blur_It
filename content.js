const originalImages = new Map();

function applyBlurToImage(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    ctx.filter = 'blur(10px)';
    ctx.drawImage(image, 0, 0);

    originalImages.set(canvas, image);
    image.parentNode.replaceChild(canvas, image);
}

function removeBlurFromCanvas(canvas) {
    const originalImage = originalImages.get(canvas);
    if (originalImage) {
        canvas.parentNode.replaceChild(originalImage, canvas);
        originalImages.delete(canvas);
    }
}

function toggleBlurOnPage(shouldBlur) {
    if (shouldBlur) {
        const images = document.querySelectorAll('img');
        images.forEach(applyBlurToImage);
    } else {
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(removeBlurFromCanvas);
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggle') {
        toggleBlurOnPage(request.shouldBlur);
        sendResponse({status: 'Toggling blur effect complete'});
    }
    return true; // indicates we will send a response asynchronously
});
chrome.storage.local.get('isBlurred', function(data) {
    if (data.isBlurred) {
        toggleBlurOnPage(true);
    }
});