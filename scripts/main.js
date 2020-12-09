"use strict";

const newItem = document.getElementById("add_item");
let showInput = document.getElementById("desc");
let addDesc = document.querySelector("input[type=text]");
const addButton = document.getElementById("add");
let ulItems = document.querySelector(".items");
newItem.addEventListener("click", addItem, false);
addButton.addEventListener("click", updateItem, false);
console.log(ulItems);

function addItem() {
  showInput.style.display = "block";
  newItem.style.display = "none";
}

function updateItem() {
  let textToAdd = addDesc.value;
  let li = document.createElement("li");
  li.textContent = textToAdd;

  ulItems.appendChild(li);
  showInput.style.display = "none";
  newItem.style.display = "block";
}
