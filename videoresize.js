  // Create a YouTube player when the API is ready
  function onYouTubeIframeAPIReady() {
    var player;

player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoID: 'qgrneknSSBU',
    events: {
      'onReady': onPlayerReady,
    }
    
    // videoId: 'qgrneknSSBU',
});

loadVideoById({'videoId': 'qgrneknSSBU',
               'startSeconds': 5,
               'endSeconds': 60,
               'suggestedQuality': 'large'});
}

