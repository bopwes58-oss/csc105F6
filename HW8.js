const items = [
  "Introduction to HTML & CSS",
  "JavaScript: The Good Parts",
  "Eloquent JavaScript",
  "Clean Code by Robert C. Martin",
  "You Don't Know JS",
  "Designing Data-Intensive Applications",
  "The Pragmatic Programmer",
  "MDN Web Docs Guide",
  "CSS Grid & Flexbox Handbook",
  "Algorithms Unlocked"
];

const itemList = document.getElementById("item-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

function loadItems() {
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    itemList.appendChild(li);
  }
}

function filterItems() {
  const searchedString = searchInput.value;
  const listElements = itemList.getElementsByTagName("li");

  for (let i = 0; i < listElements.length; i++) {
    const elementText = listElements[i].textContent;

    if (elementText.toLowerCase().includes(searchedString.toLowerCase())) {
      listElements[i].classList.remove("hidden");
    } else {
      listElements[i].classList.add("hidden");
    }
  }
}

window.addEventListener("DOMContentLoaded", loadItems);

searchBtn.addEventListener("click", filterItems);