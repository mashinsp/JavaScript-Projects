const textareadiv = document.getElementById('textarea');
const totaldiv = document.getElementById('total-container');
const remainingdiv =document.getElementById('remaining-container');

textareadiv.addEventListener("keyup", () =>{
  updateCounter();  
});
updateCounter();
function updateCounter() {
    totaldiv.innerText = textareadiv.value.length;
    remainingdiv.innerText = textareadiv.getAttribute('maxlength') - textareadiv.value.length;
}