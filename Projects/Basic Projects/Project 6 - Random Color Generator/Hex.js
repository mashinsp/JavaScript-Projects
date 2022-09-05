const Hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const button = document.querySelector('.btn');
const iddiv = document.querySelector('.color-id');


button.addEventListener('click',()=>{
    let col = getcolor();
    document.body.style.backgroundColor = col;
    iddiv.textContent = col;
})


const getcolor = () => {
    let color='#';
    for(var i=0;i<6;i++){
    let rannum = Math.floor(Math.random()*Hex.length);
    color+=Hex[rannum];
    }
    return color;
}
