let timer = document.getElementById("timer");
const pomodoro = document.getElementById("pomodoro");
const takeAShortBreak = document.getElementById("short-break");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
let minutes = 25;
let time = minutes * 60;
let interval = "";


//element.addEventListener("click", function);

pomodoro.addEventListener("click", pomodoroTimer);
takeAShortBreak.addEventListener("click", shortBreakTimer);
start.addEventListener("click", startControl)
stop.addEventListener("click", reset)


function pomodoroTimer() {
    clearInterval(interval);
    document.getElementById("timer").innerText = "25:00";
    minutes = 25;
};

function shortBreakTimer() {
    clearInterval(interval);
    document.getElementById("timer").innerText = "5:00";
    //time in seconds
    minutes = 5;
};


function startControl() {
    interval = setInterval(timerDisplay, 1000);
}

function timerDisplay() {
    minutes = Math.floor(time/60);
    let seconds = time % 60;

    timer.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

function reset() {
    clearInterval(interval);
}