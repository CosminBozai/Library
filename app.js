const table = document.getElementById("table");
const addBtn = document.getElementById("add-book");

let myLibrary = [];

function Book(author, title, year, pages, status) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

addBtn.addEventListener("click", addNewBook);

function addNewBook(author, title, year, pages, status) {
  author = String(prompt("Author:"));
  title = String(prompt("Title:"));
  year = String(prompt("Year:"));
  pages = String(prompt("Pages:"));
  status = String(prompt("Status:"));
  let x = new Book(author, title, year, pages, status);
  myLibrary.push(x);
  x.ID = myLibrary.indexOf(x);
  displayBook();
}

function displayBook() {
  let row = table.insertRow(-1);
  let ID = row.insertCell(0);
  let author = row.insertCell(1);
  let title = row.insertCell(2);
  let year = row.insertCell(3);
  let pages = row.insertCell(4);
  let status = row.insertCell(5);

  ID.innerHTML = myLibrary[myLibrary.length - 1].ID;
  author.innerHTML = myLibrary[myLibrary.length - 1].author;
  title.innerHTML = myLibrary[myLibrary.length - 1].title;
  year.innerHTML = myLibrary[myLibrary.length - 1].year;
  pages.innerHTML = myLibrary[myLibrary.length - 1].pages;
  status.innerHTML = myLibrary[myLibrary.length - 1].status;
}
