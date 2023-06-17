  // Create a YouTube player when the API is ready
  function onYouTubeIframeAPIReady() {
    var player;

 function resizePlayer() {
  var container = document.querySelector('smallbox l');
  var width = container.clientWidth;
  var height = width * 0.6

  player.setSize(width, height);
}  
player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'qgrneknSSBU',
    events: {
    'onReady': resizePlayer,
    'onStateChange': resizePlayer
    }
});
  
  window.addEventListener('resize', resizePlayer);
}