const container = document.querySelector('.square-container');
const mole = document.querySelector('.mole'); 
const timeleft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let index = 1;
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;



for(let i=0;i<9;i++){
    container.innerHTML += `<div class='square' id='${index++}'></div>`
}
const squares = document.querySelectorAll('.square');

const randomsquare = () => {
    squares.forEach(square => square.classList.remove('mole'))//removing mole class if it exists before
    let randomsquare = squares[Math.floor(Math.random() * 9)];
    randomsquare.classList.add('mole');//adding mole class at random index
    hitPosition = randomsquare.id;
}

squares.forEach(square => {
    square.addEventListener('click', (e) => {
        console.log()
        if(e.target.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

const updatePosition = () => {
    timerId = setInterval(randomsquare, 700)
}
updatePosition()

const timer = () => {
   currentTime--;
   timeleft.textContent = currentTime;

   if(currentTime === 0){
    hitPosition = null;
    clearInterval(countdownTimerId);
    clearInterval(timerId);
    alert('Your Score: ' + result);
   }
}

let countdownTimerId = setInterval(timer,1000);