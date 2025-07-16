// Youtube Player init logic
let players = [];

export function initYouTubePlayers() {
  // Ensure the YouTube Iframe API is loaded
  const playerElements = document.querySelectorAll('[data-youtube-id]');
  
  playerElements.forEach(el => {
    const videoId = el.getAttribute('data-youtube-id');
    const player = new YT.Player(el.id, {
      height: '100%',
      width: '100%',
      videoId: videoId,
    });
    players.push(player);
  });
}

// Separated function to easy call when swup replaces content
export function onYouTubeIframeAPIReady() {
  initYouTubePlayers();
}

// Dynamically load the YouTube Iframe API)
(function loadAPI() {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }
})();

// Ensure global callback calls the right function
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;