const video = document.getElementById('myVideo');
const videoSrc = 'E:/Programs/Python/Proj/HLS/static/videos/output.m3u8';

// HLS.js logic for HLS streaming
if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        console.log('HLS manifest loaded');
        // Optionally auto-play: video.play();
    });
    hls.on(Hls.Events.ERROR, function(event, data) {
        console.error('HLS error:', data);
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function() {
        console.log('Native HLS loaded');
        // Optionally auto-play: video.play();
    });
} else {
    alert('Этот браузер не поддерживает HLS-видео.');
}

// Play/Pause function
function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Volume control function
function setVolume(vol) {
    video.volume = parseFloat(vol);
}

// Full-screen function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            alert("Ошибка входа в полноэкранный режим: " + err.message);
        });
    } else {
        document.exitFullscreen();
    }
}