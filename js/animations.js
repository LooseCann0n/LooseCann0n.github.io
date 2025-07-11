console.log("JS loaded!");
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
