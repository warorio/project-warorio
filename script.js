// Pathfinder: Web Creator starter script.
// Day 1: this already works on your site. Day 4: you read it line by line and change it.

// 1. Find the button and the box in the page. The page the browser built is called the DOM.
const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

// 2. Remember whether the box is open. This is the page's "state".
let isOpen = false;

// 3. When the button is clicked, run this function.
// Only run this on a page that has the button.
if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      details.hidden = true;
      toggleButton.textContent = "See this weeks leaderboard";
      isOpen = false;
    } else {
      details.hidden = false;
      toggleButton.textContent = "Hide this weeks leaderboard";
      isOpen = true;
    }
    console.log("Box open:", isOpen);
  });
}

// Day 4, Block 2: first add the list section to index.html (the page gives you the HTML),
// then delete the slash-star line below and the star-slash line at the end to switch this on.

const items = ["Planting trees", "Promoting awareness on environmental conservation", "Plant-care reminders", "Watering tips"];
const list = document.querySelector("#item-list");

// Only run this on a page that has the list.
if (list) {
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  console.log("Items shown:", items.length);
}
const dataList = document.querySelector("#data-list");

if (dataList) {
  for (const record of records) {
    const li = document.createElement("li");
    if (record.amount === 0) {
      li.textContent = record.name + " (" + record.category + "): none right now";
    } else {
      li.textContent = record.name + " (" + record.category + "): " + record.amount;
    }
    dataList.appendChild(li);
  }
  console.log("Records shown:", records.length);
}
// Day 6, Block 2: keep only the records in one category
// Only run this on a page that has the data list.
if (dataList) {
  const matches = records.filter(function (record) {
    return record.category === "[Category A]";
  });

  const filterCount = document.querySelector("#filter-count");
  const filterList = document.querySelector("#filter-list");
  filterCount.textContent = matches.length + " of " + records.length + " records match.";

  for (const record of matches) {
    const li = document.createElement("li");
    li.textContent = record.name;
    filterList.appendChild(li);
  }

  if (matches.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nothing matches yet.";
    filterList.appendChild(li);
  }
}