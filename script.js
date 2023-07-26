let timer = document.getElementById("timer");
const pomodoro = document.getElementById("pomodoro");
const takeABreak = document.getElementById("break");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

//element.addEventListener("click", function);

pomodoro.addEventListener("click", pomodoroTimer);
takeABreak.addEventListener("click", breakTimer);
start.addEventListener("click", startControl)


function pomodoroTimer() {
    alert("pomodoro");
};

function breakTimer() {
    alert("break");
};

function startControl() {
}

