let myInput = [];
const inputEl = document.querySelector(".input-field");
const saveBtn = document.querySelector(".save");
const deleteBtn = document.querySelector(".delete");
const saveTab = document.querySelector(".save-tab");
const ulEl = document.querySelector(".list");
let savedItems = JSON.parse(localStorage.getItem("myInput"));

console.log(savedItems);

if (savedItems) {
  myInput = savedItems;
  renderItems();
}

saveBtn.addEventListener("click", function () {
  if (inputEl.value !== "") {
    myInput.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myInput", JSON.stringify(myInput));
    renderItems();
  }
});

function renderItems() {
  let items = "";
  for (let i = 0; i < myInput.length; i++) {
    items += `<li><a href="" target="_blank">${myInput[i]}</a></li>`;
  }
  ulEl.innerHTML = items;
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myInput = [];
  renderItems();
});

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    myInput.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderItems();
  });
});
