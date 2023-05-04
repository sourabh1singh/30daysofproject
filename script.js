const display = document.querySelector('.display');
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime, intervalId;

//Define the start function that start Time:

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime/1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);

        const formattedTime = `${pad(hours)}: ${pad(minutes)}:
         ${pad(seconds)}`

         display.textContent = formattedTime;
    }, 10);
}

function stop () {
    clearInterval(intervalId);
}

function reset () {
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);