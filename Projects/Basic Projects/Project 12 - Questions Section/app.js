const buttons = document.querySelectorAll('.question-btn');

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        buttons.forEach((item)=>{
            if(item !== e.currentTarget){
                item.parentElement.parentElement.classList.remove('show-text');
            }
        })
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
    })
})



// const questions = document.querySelectorAll('.question');

// questions.forEach((question)=>{
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener('click',()=>{
        
//         questions.forEach((item)=>{
//             if(item!==question){
//                 item.classList.remove('show-text')
//             }
//         })

//         question.classList.toggle('show-text');
//     })
// })

