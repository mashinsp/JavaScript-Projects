const date = document.getElementById('date');
date.innerText = new Date().getFullYear();

const navtoggle = document.querySelector('.nav-toggle');
const linkscontainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navtoggle.addEventListener('click', () => {
    const containerHeight = linkscontainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linkscontainer.style.height = `${linksHeight}px`;
    }else{
        linkscontainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollheight = window.pageYOffset;
    const navheight = navbar.getBoundingClientRect().height;
    if(scrollheight > navheight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollheight > 500){
        toplink.classList.add('show-link');
    }else{
        toplink.classList.remove('show-link');
    }
});

const scrolllinks = document.querySelectorAll('.scroll-link');
scrolllinks.forEach((link)=>{
    link.addEventListener('click',(e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navheight = navbar.getBoundingClientRect().height;
        const containerHeight = linkscontainer.getBoundingClientRect().height;
        const fixednav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navheight;

        if(!fixednav){
            position = position - navheight;
        }
        if(navheight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linkscontainer.style.height = 0;
    })
})