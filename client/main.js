const nav = document.getElementById('nav');
const specificHeader = document.querySelector('.skills');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const navHeight = nav.clientHeight;
  const specificHeaderTop = specificHeader.offsetTop;

  if (scrollY >= specificHeaderTop - navHeight) {
    nav.classList.add('nav-bg');
  } else {
    nav.classList.remove('nav-bg');
  }
});

const scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
