const grid = document.querySelector('.grid');
const blockwidth = 100;
const blockheight = 20;
const borderwidth = 560;
const borderheight = 300;
const ballDiameter = 20;
let timerId;
let xDirection= 2;
let yDirection= 2;
let score = 0;

//user position
const userstart = [230,10];
let currentPosition = userstart;
//ball position
const ballstart = [270,40];
let ballposition = ballstart;

class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,yAxis];
        this.bottomright = [xAxis + blockwidth , yAxis];
        this.topleft = [xAxis , yAxis + blockheight]
        this.topright = [xAxis + blockwidth , yAxis + blockheight]
    }
}

const blocks = [ 
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]

const addblock = () => {
    for(let i=0;i<blocks.length;i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left  = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block);
    }
}
addblock()

//draw user
const updateUserposition = () => {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}
//add user
const user = document.createElement('div');
user.classList.add('user');
updateUserposition();
grid.appendChild(user);


// draw ball
const drawBall = () => {
    ball.style.left = ballposition[0] + 'px';
    ball.style.bottom = ballposition[1] + 'px';
}
// add ball 
const ball = document.createElement('div')
ball.classList.add('ball');
drawBall();
grid.appendChild(ball)


// move user
const moveuser = (e) =>{
     switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0]>0){
                currentPosition[0] -= 10;
                updateUserposition();
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < borderwidth - blockwidth){
                currentPosition[0] += 10;
                updateUserposition();
            }
            break;
     }
}
document.addEventListener('keydown', moveuser)

// move ball
const moveBall = () => {
    ballposition[0] += xDirection;
    ballposition[1] += yDirection;
    drawBall();
    checkCollision();
}

timerId = setInterval(moveBall,30);

const checkCollision = () => {
    for(let i = 0; i <blocks.length;i++){
        if(
            (ballposition[0] > blocks[i].bottomLeft[0] && ballposition[0] < blocks[i].bottomright[0]) &&
            ((ballposition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballposition[1]<blocks[i].topleft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i,1)
            changeDirection()
            score++;
            score.innerText = score;
        }
        if (blocks.length===0){
            clearInterval(timerId)
            document.removeEventListener('keydown',moveuser)
        }
    }

    if(
        (ballposition[0] > currentPosition[0] && ballposition[0] < currentPosition[0] + blockwidth) &&
        (ballposition[1] > currentPosition[1] && ballposition[1] < currentPosition[1] +blockheight)    
    ){
        changeDirection();
    }

    if(ballposition[0] >= (borderwidth - ballDiameter) || 
       ballposition[1] >= (borderheight - ballDiameter) ||
       ballposition[0] <= 0){
        changeDirection();
    }

    if(ballposition[1] <= 0){
        clearInterval(timerId)
        document.removeEventListener('keydown',moveuser)
    } 
}

const changeDirection = () => {
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2;
        return;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return;
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
    }
}