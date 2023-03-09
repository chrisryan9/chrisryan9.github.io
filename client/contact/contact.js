const contactMenuIcon = document.querySelector('.about-menu-icon');
const contactContainer = document.querySelector('.about-container');

contactMenuIcon.addEventListener('click', () => {
    contactContainer.classList.toggle('change')
});