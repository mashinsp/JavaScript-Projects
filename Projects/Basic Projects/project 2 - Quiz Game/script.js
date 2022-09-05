
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const resetdiv = document.getElementById("reset");
const submitdiv = document.getElementById("submit");

//random question gen
const num2 = Math.ceil(Math.random() * 10);
const num1 = Math.ceil(Math.random() * 10);
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

let score=JSON.parse(localStorage.getItem('score')) || 0;

resetdiv.addEventListener('click',()=> {
    score=0;
    if(localStorage.getItem('score')==1){
        score-=1;
    }
    else{
        score+=1;
    }
})

scoreEl.innerHTML = `score: ${score}`;

const correctAns = num1 * num2;

formEl.addEventListener("click", () => {
  const userAns = Number(inputEl.value);
  if (userAns === correctAns) {
    score++;
    localstorageupdate()
  } else {
    score--;
    localstorageupdate()
  }
});

function localstorageupdate(){
    localStorage.setItem('score', JSON.stringify(score));
}
