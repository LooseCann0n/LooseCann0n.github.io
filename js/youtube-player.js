let players = [];

function onYouTubeIframeAPIReady() {
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

// Dynamically load the YouTube Iframe API (optional if you use <script> in HTML)
(function loadAPI() {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }
})();
