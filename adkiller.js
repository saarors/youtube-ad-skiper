(function() {
    const skipAd = () => {
        const video = document.querySelector('video');
        const ad = document.querySelector('.video-ads, .ytp-ad-module, .ytp-ad-player-overlay');
        
        if (ad && ad.children.length > 0 && video) {
            if (!isNaN(video.duration) && isFinite(video.duration)) {
                video.currentTime = video.duration - 0.1;
            }
        }
        
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        if (skipButton) {
            skipButton.click();
        }
        
        const overlayClose = document.querySelector('.ytp-ad-overlay-close-button');
        if (overlayClose) {
            overlayClose.click();
        }
    };

    const observer = new MutationObserver(skipAd);
    observer.observe(document.body, { childList: true, subtree: true });
    
    setInterval(skipAd, 500);
})();
