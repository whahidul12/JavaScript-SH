"use strict";

const display = document.querySelector(".display");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const startTimer = (duration) => {
    const timerInterval = setInterval(() => {

        let displayMinutes = parseInt(duration / 60, 10)
        let displaySeconds = parseInt(duration % 60, 10)

        display.textContent = `${displayMinutes} : ${displaySeconds}`
        console.log(">>", duration);

        if (--duration < 0) {
            clearInterval(timerInterval)
            display.textContent = `Breath Out`
        }
    }, 1000);
}





startBtn.addEventListener("click", () => {
    let storeMinutes = minutes.value;
    let storeSeconds = seconds.value;
    let totalTime = ((parseInt(storeMinutes) * 60) + parseInt(storeSeconds));
    startTimer(totalTime);
})
stopBtn.addEventListener("click", () => {

})


