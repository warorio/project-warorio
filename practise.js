// Day 4, Block 2: the broken feature. Three faults, found in this order.
// Replace script.js with this file, open the live site, open the console (Inspect, then Console).

const toggleButton = document.querySelector("#togle-button");
const details = document.querySelector("#details");

let isOpen = false;

toggleButton.addEventListener("click", function () {
  if (isOpen) {
    details.hidden = true;
    toggleButton.textContent = "Show this week's details";
    isOpen = false;
  } else {
    details.hidden = false;
    toggleButton.textContent = "Hide this week's details";
    isOpen = true;
  }
  console.log("Box open:", isOpen);
);

const items = ["First item", "Second item", "Third item"];
const list = document.querySelector("#item-list");

for (const item of items) {
  const li = document.createElement("li");
  li.textContent = item;
}
console.log("Items shown:", items.length);





const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

let isOpen = false;

toggleButton.addEventListener("click", function () {
  if (isOpen) {
    details.hidden = true;
    toggleButton.textContent = "Show this week's details";
    isOpen = false;
  } else {
    details.hidden = false;
    toggleButton.textContent = "Hide this week's details";
    isOpen = true;
  }
  console.log("Box open:", isOpen);
});

const items = ["First item", "Second item", "Third item"];
const list = document.querySelector("#item-list");

for (const item of items) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}
console.log("Items shown:", items.length);