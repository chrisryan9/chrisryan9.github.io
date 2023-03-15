const nav = document.getElementById('nav');
const specificHeader = document.querySelector('.skills');

function updateNavBackground() {
  const scrollY = window.scrollY;
  const navHeight = nav.clientHeight;
  const specificHeaderTop = specificHeader.offsetTop;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 700) {
    if (scrollY > 0) {
      nav.classList.add('nav-bg');
    } else {
      nav.classList.remove('nav-bg');
    }
  } else {
    if (scrollY >= specificHeaderTop - navHeight) {
      nav.classList.add('nav-bg');
    } else {
      nav.classList.remove('nav-bg');
    }
  }
}

// Add scroll event listener
window.addEventListener('scroll', updateNavBackground);

// Define the media query
const mediaQuery = window.matchMedia('(max-width: 700px)');

// Add media query change event listener
mediaQuery.addEventListener('change', updateNavBackground);

const scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
