const display = document.querySelector(".display");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let timerInterval;

const startTimer = (totalTime) => {
    let duration = totalTime;
    timerInterval = setInterval(() => {

        let displayMinutes = parseInt(duration / 60, 10);
        let displaySeconds = parseInt(duration % 60, 10);

        displayMinutes <= 9 ? displayMinutes = `0${displayMinutes}` : displayMinutes;
        displaySeconds <= 9 ? displaySeconds = `0${displaySeconds}` : displaySeconds;



        display.textContent = `${displayMinutes} : ${displaySeconds}`;
        console.log(">>", duration);

        if (--duration < 0) {
            clearInterval(timerInterval)
            display.textContent = `Breath Out`;

            setTimeout(() => {
                startTimer(totalTime);
            }, 3000);
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
    clearInterval(timerInterval)
    display.textContent = `Breath Out`
})


