let timerID;

const audio = document.querySelector('#player');
const video = document.querySelector('#myVideo');
const buttonMobile = document.querySelector('#myButton');

buttonMobile.addEventListener('click', function(){
document.querySelector('#player').play();
document.querySelector('#myVideo').play();
})

const buttonTwo = document.querySelector('#btnTwo');
buttonTwo.addEventListener('click', function(){
    set();
})

const buttonPlay = document.querySelector('#play');
buttonPlay.addEventListener('click', function(){
    timerID = setInterval(timerStart, 1000);

    if (audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }

})

const buttonStop = document.querySelector('#pause');
buttonStop.addEventListener('click', function(){
    stopTimer();

    if (audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }

})

let amountTime = 0;

function set(){
    play.style.display = 'flex';
    btnTwo.style.display = 'none';
    const timer = Number (document.querySelector('#input').value);
    amountTime = timer*60;
}

function timerStart(){
    play.style.display = 'none';
    pause.style.display = 'flex';
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10){
        seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0){
        amountTime = 0;
        pause.style.display = 'none';
    }

}

function stopTimer(){
    play.style.display = 'flex';
    pause.style.display = 'none';
    clearInterval(timerID);
}

