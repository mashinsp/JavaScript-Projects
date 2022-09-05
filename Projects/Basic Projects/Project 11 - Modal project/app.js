const overlay = document.querySelector('.modal-overlay');
const openbtn = document.querySelector('.btn');
const closebtn = document.querySelector('.close-btn');

openbtn.addEventListener('click', () => {
    overlay.classList.toggle("open-modal");
})
closebtn.addEventListener('click', () => {
    overlay.classList.toggle("open-modal");
})