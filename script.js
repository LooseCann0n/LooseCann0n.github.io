// script.js

// Load the YouTube Iframe API asynchronously
function loadYouTubeIframeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  // Create the video player
  function onYouTubeIframeAPIReady(videoId) {
    // Create a new YouTube player
    const player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoId,
    });
  }
  
  // Load the YouTube Iframe API and create the player
  function loadYouTubePlayer() {
    const videoId = document.getElementById('videoIdInput').value;
    loadYouTubeIframeAPI();
    onYouTubeIframeAPIReady(videoId);
  }
  
  // Listen for input changes on the video ID input field
  document.getElementById('videoIdInput').addEventListener('input', function() {
    const videoId = this.value;
    loadYouTubeIframeAPI();
    onYouTubeIframeAPIReady(videoId);
  });
  
  // Initial load of the player with the default video ID
  loadYouTubePlayer();
  