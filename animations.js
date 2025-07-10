
// Changes the active website page since topnav does not get swup
function updateActiveNavLink() {
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.topnav a');

    // Check if web tab ends with html
    if (!currentPath.endsWith('.html')) {
    currentPath += '.html'; // Add html to end allowing for linkPath to be compared to currentPath
    }

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


const swup = new Swup();



// const swup = new Swup({
//   containers: ['#swup']
// });

// swup.hooks.on('content:replace', () => {
//     updateActiveNavLink();

//     const main = document.getElementById('swup');
//     if (!main) return;
//     main.classList.remove('animate-down-fade');
//     void main.offsetWidth;
//     main.classList.add('animate-down-fade');
// });



swup.hooks.on('content:replace', () => {
  updateActiveNavLink();

  const main = document.getElementById('swup');
  if (!main) return;

  // Remove any existing animation class
  main.classList.remove('animate-down-fade');

  // Force reflow to restart animation
  void main.offsetWidth;

  // Add the drop-in animation class
  main.classList.add('animate-down-fade');

  // Optional: clean up after animation ends
  main.addEventListener('animationend', () => {
    main.classList.remove('animate-down-fade');
  }, { once: true });
});




// // Load the YouTube Iframe API asynchronously
// function loadYouTubeIframeAPI() {
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   }
  
//   // Create the video player
//   function onYouTubeIframeAPIReady(videoId) {
//     // Create a new YouTube player
//     const player = new YT.Player('player', {
//       height: '360',
//       width: '640',
//       videoId: videoId,
//     });
//   }
  
//   // Load the YouTube Iframe API and create the player
//   function loadYouTubePlayer() {
//     const videoId = document.getElementById('videoIdInput').value;
//     loadYouTubeIframeAPI();
//     onYouTubeIframeAPIReady(videoId);
//   }
  
//   // Listen for input changes on the video ID input field
//   document.getElementById('videoIdInput').addEventListener('input', function() {
//     const videoId = this.value;
//     loadYouTubeIframeAPI();
//     onYouTubeIframeAPIReady(videoId);
//   });
  
//   // Initial load of the player with the default video ID
//   loadYouTubePlayer();
  