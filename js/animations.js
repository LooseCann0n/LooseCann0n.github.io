import { initYouTubePlayers } from './youtube-player.js'; 

// Changes the active website page since topnav does not get swup
function updateActiveNavLink() {
    console.log('Updating active nav link');

    let currentPath = window.location.pathname;
    if (currentPath == '/') { // Default to index.html if at root
        currentPath = '/index.html'; 
    }
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


// Swup for page transitions
const swup = new Swup();

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

    if (window.YT && typeof YT.Player === 'function') {
    initYouTubePlayers();
  }
});

