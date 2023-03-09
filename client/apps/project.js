const projectMenuIcon = document.querySelector('.menu-icon');
const projectContainer = document.querySelector('.project-container');

projectMenuIcon.addEventListener('click', () => {
    projectContainer.classList.toggle('change')
});