"use strict";
const display = document.querySelector(".display");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let timerInterval;
let timeout;
let isRuning = false

const startTimer = (totalTime) => {
    let duration = totalTime;
    timerInterval = setInterval(() => {

        let displayMinutes = parseInt(duration / 60, 10);
        let displaySeconds = parseInt(duration % 60, 10);

        displayMinutes = displayMinutes <= 9 ? `0${displayMinutes}` : displayMinutes;
        displaySeconds = displaySeconds <= 9 ? `0${displaySeconds}` : displaySeconds;

        display.textContent = `${displayMinutes} : ${displaySeconds}`;
        console.log(">>", duration);

        if (--duration < 0) {
            clearInterval(timerInterval)
            display.textContent = `Breath Out`;

            timeout = setTimeout(() => {
                display.textContent = `Breath In`;
                startTimer(totalTime);
            }, 3000);
        }
        isRuning = true;
    }, 1000);
}

startBtn.addEventListener("click", () => {
    let storeMinutes = minutes.value;
    let storeSeconds = seconds.value;
    let totalTime = ((parseInt(storeMinutes) * 60) + parseInt(storeSeconds));
    if (!isRuning) {
        startTimer(totalTime);
    }
})
stopBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    clearTimeout(timeout);
    display.textContent = `Breath In`;
    isRuning = false;
})


