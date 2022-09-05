const colors = ['red', 'green', '#F15025','rgba(133,122,200)'];

const button = document.querySelector('.btn');
const iddiv = document.querySelector('.color-id');


button.addEventListener('click',()=>{
    rannum = getrandomnumber();
    document.body.style.backgroundColor = colors[rannum]
    iddiv.textContent = colors[rannum];
})

const getrandomnumber = () => Math.floor(Math.random()*colors.length);
