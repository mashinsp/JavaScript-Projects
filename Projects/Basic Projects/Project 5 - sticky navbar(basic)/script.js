const topbardiv = document.querySelector('.top-bar');
const bottomdiv = document.querySelector('.Text');
const box = document.querySelector('.box')


window.addEventListener('scroll', ()=>{
    if(window.scrollY > bottomdiv.offsetTop - topbardiv.offsetHeight - 50){
        box.classList.add("active");
    }else{
        box.classList.remove("active");
    }
})