const aboutMenuIcon = document.querySelector('.about-menu-icon');
const aboutContainer = document.querySelector('.about-container');

aboutMenuIcon.addEventListener('click', () => {
    aboutContainer.classList.toggle('change')
});