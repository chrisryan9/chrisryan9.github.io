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


document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display the alert message
    alert("Your message has been sent. Thank you for contacting me!");

    // Clear the input fields
    const inputFields = document.querySelectorAll(".contactForm input, .contactForm textarea");
    for (const field of inputFields) {
      field.value = "";
    }

    // TODO: Add your form submission code here (e.g., AJAX, fetch, etc.)

  });
});