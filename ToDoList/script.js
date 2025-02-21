"use strict";

const input = document.querySelector("#input");
const dispaly = document.querySelector(".list-container");
const add = document.querySelector("#add");

add.addEventListener("click", () => {
    const str_input_value = input.value.trim();

    if (str_input_value !== "") {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">${str_input_value} 
        <button onclick="deleteTask(this)">Delete</button>`;
        dispaly.appendChild(li);
        input.value = "";
    }
})

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
}

const deleteChecked = () => {
    const checkedBoxes = dispaly.querySelectorAll("input[type='checkbox']:checked");
    checkedBoxes.forEach(checkedBox => {
        const li = checkedBox.parentNode;
        li.parentNode.removeChild(li)
    })
}

