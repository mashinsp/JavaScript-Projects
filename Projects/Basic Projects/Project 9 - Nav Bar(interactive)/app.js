const links = document.querySelector('.links');
const nav = document.querySelector('.nav-toggle');


nav.addEventListener('click', () => {
    links.classList.toggle('show-links');
})