const buttondiv = document.querySelector('.btn');

buttondiv.addEventListener('mouseover',(e) => {
    const x = e.pageX - buttondiv.offsetLeft;
    const y = e.pageY - buttondiv.offsetTop;

    buttondiv.style.setProperty('--posX', x + "px");
    buttondiv.style.setProperty('--posY', y + "px");
})
