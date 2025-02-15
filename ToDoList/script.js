"use strict";

const input = document.querySelector("#input");
const dispaly = document.querySelector(".list-container");
const add = document.querySelector("#add");

add.addEventListener("click", () => {
    const text = input.value;
    dispaly.innerHTML += `<input type="checkbox"></input>` + text + "</br >";
    input.value = "";

})


