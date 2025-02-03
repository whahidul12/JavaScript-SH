"use strict";

const button = document.querySelector("#btn");
const display = document.querySelector("#display");
// const nn = document.querySelector("lis");

console.log(button);

button.addEventListener("click", () => {
    const time = 1;
    startTime(time);
})


const startTime = (time) => {
    const myIntervel = setInterval(() => {
        console.log(">>");

        display.textContent = time;
        if (++time > 5) {
            clearInterval(myIntervel);

        }
    }, 1000);
}