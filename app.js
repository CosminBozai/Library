const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const yearInput = document.getElementById("year");
const pagesInput = document.getElementById("pages");
const tbody = document.querySelector("tbody");
const addBtn = document.getElementById("add-book");

let myLibrary = [];

function Book(author, title, year, pages, status) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

addBtn.addEventListener("click", displayForm);

function displayForm() {
  form.style.display = "block";
}

// Deleting table elements before adding a new book
// so the iteration of myLibrary doesn't display duplicates in the table
function deleteTableElements() {
  while (tbody.childElementCount > 1) {
    tbody.removeChild(tbody.lastChild);
  }
}

submitBtn.addEventListener("click", addNewBook);

function addNewBook(author, title, year, pages, status) {
  author = String(authorInput.value);
  title = String(titleInput.value);
  year = String(yearInput.value);
  pages = String(pagesInput.value);
  status = String(document.querySelector('input[name="status"]:checked').value);
  let x = new Book(author, title, year, pages, status);
  myLibrary.push(x);
  deleteTableElements();
  displayBook();
}

function displayBook() {
  // Iterating through myLibrary every time a book is added or removed
  // makes the table always updated
  for (i = 0; i < myLibrary.length; i++) {
    let row = tbody.insertRow(-1);
    let author = row.insertCell(0);
    let title = row.insertCell(1);
    let year = row.insertCell(2);
    let pages = row.insertCell(3);
    let status = row.insertCell(4);
    addRemoveBtn(row, i);

    author.innerHTML = myLibrary[i].author;
    title.innerHTML = myLibrary[i].title;
    year.innerHTML = myLibrary[i].year;
    pages.innerHTML = myLibrary[i].pages;
    status.innerHTML = myLibrary[i].status;
  }
}

function addRemoveBtn(row, id) {
  let actions = row.insertCell(5);
  let removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-button");
  removeBtn.textContent = "delete";
  removeBtn.setAttribute("data-id", id);
  actions.appendChild(removeBtn);
  removeBtn.addEventListener("click", (e) => {
    deleteBook(e.target.getAttribute("data-id"));
  });
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
  deleteTableElements();
  displayBook();
}
