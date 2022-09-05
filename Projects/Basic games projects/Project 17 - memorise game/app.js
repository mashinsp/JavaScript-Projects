const data = [
    { 
        name: 'cheseburger',
        img: './images/cheseburger.png'
    },
    { 
        name: 'cone',
        img: './images/cone.png'
    },
    { 
        name: 'doughnut',
        img: './images/doughnut.png'
    },
    { 
        name: 'fries',
        img: './images/fries.png'
    },
    { 
        name: 'pie',
        img: './images/pie.png'
    },
    { 
        name: 'taco',
        img: './images/taco.png'
    },
    { 
        name: 'cheseburger',
        img: './images/cheseburger.png'
    },
    { 
        name: 'cone',
        img: './images/cone.png'
    },
    { 
        name: 'doughnut',
        img: './images/doughnut.png'
    },
    { 
        name: 'fries',
        img: './images/fries.png'
    },
    { 
        name: 'pie',
        img: './images/pie.png'
    },
    { 
        name: 'taco',
        img: './images/taco.png'
    },
];
data.sort(() => 0.5 - Math.random());
console.log(data);

const imgdiv = document.querySelector('#grid');
let index = 0;
let cardchosen = [];
let cardchosenid = [];

data.forEach((item) => {
    imgdiv.innerHTML += `<img src='./images/tuxpi.com.1662282403.jpg' data-id='${index++}'>`
})
imgdiv.addEventListener('click', (e)=>{
    flipcard(e);
    if(cardchosen.length === 2 ){
        setTimeout(checkmatch(e), 500)
    }
})

const checkmatch = (e) => {
    const cards = document.querySelectorAll('img')
    if(cardchosenid[0] == cardchosenid[1]){
        cards[cardchosenid[0]].setAttribute('src','./images/tuxpi.com.1662282403.jpg');
        cards[cardchosenid[1]].setAttribute('src','./images/tuxpi.com.1662282403.jpg');
    }
    if(cardchosen[0] == cardchosen[1]){
        cards[cardchosenid[0]].setAttribute('src','./images/white.png')
        // data[cardchosenid[0]].img = './images/white.png';
        // data[cardchosenid[1]].img = './images/white.png';
        cards[cardchosenid[1]].setAttribute('src','./images/white.png')
        cards[cardchosenid[0]].removeEventListener('click', flipcard);
        cards[cardchosenid[1]].removeEventListener('click', flipcard);
    }
    else{
        cards[cardchosenid[0]].setAttribute('src','./images/tuxpi.com.1662282403.jpg');
        cards[cardchosenid[1]].setAttribute('src','./images/tuxpi.com.1662282403.jpg');
    }
    cardchosenid = [];
    cardchosen = [];
    
}
const flipcard = (e) => {
    const cardId = e.target.getAttribute('data-id');
    cardchosen.push(data[cardId].name)
    cardchosenid.push(cardId);
    e.target.setAttribute('src', `${data[cardId].img}`);
}
