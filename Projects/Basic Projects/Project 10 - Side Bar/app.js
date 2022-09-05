const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
})
closebtn.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
})