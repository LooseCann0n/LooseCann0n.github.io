
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

swup.hooks.on('content:replace', () => {
    updateActiveNavLink();

    const main = document.getElementById('swup');
    if (!main) return;
    main.classList.remove('animate-up-down-fade');
    void main.offsetWidth;
    main.classList.add('animate-up-down-fade');
});


// Also run it on initial page load
// updateActiveNavLink();

// const swup = new Swup();

// const isFirstLoad = !sessionStorage.getItem('hasVisited');

// // Always mark as visited now
// sessionStorage.setItem('hasVisited', 'true');

// swup.hooks.on('content:replace', () => {
//     if (isFirstLoad) 
//         return;
// console.log("Swup content replaced");

// const main = document.getElementById('swup');
// if (!main) return;
// updateActiveNavLink();
// main.classList.remove('animate-up-down-fade');
// void main.offsetWidth;
// main.classList.add('animate-up-down-fade');
// });













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
  