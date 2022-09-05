let hoursel = document.getElementById('hours');
let minutesel = document.getElementById('minutes');
let secondsel = document.getElementById('seconds');
let ampmel = document.getElementById('ampm');
//changes image in css after refreshing the page it every time
const getNewimg = () => {
    fetch('https://unsplash.it/1920/1080/?random')
      .then(response => {
      document.body.style.backgroundImage = `url('${response.url}')`;
      })
  }
const updateclock = () => {
    let h = new Date().getDay();
    let m = new Date().getMinutes(); 
    let s = new Date().getSeconds();
    let ampm = "PM"
    //to check am or pm
    if(h>12){
        h-=12;
        ampm = "AM";
    }
    //setting zeros at start if its a single digit
    h = h < 10? '0' + h : h;
    m = m < 10? '0' + m : m;
    s = s < 10? '0' + s : s;
    //changing text every second
    hoursel.innerText = h;
    minutesel.innerText = m;
    secondsel.innerText = s;
    ampmel.innerText = ampm;
    setTimeout(()=>{
        updateclock();
    },1000)
}
getNewimg();
updateclock();