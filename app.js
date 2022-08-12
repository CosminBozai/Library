const table = document.getElementById("table");

let myLibrary = [];

function Book(author, title, year, pages, status) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

const a = new Book("Adsf", "dsfdsgf", "1920", "122", "Read");
myLibrary.push(a);
const b = new Book("dsgdfg", "dfdst", "2000", "134", "Not Read");
myLibrary.push(b);

console.log(myLibrary);

function displayBook() {
  for (i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(-1);
    let ID = row.insertCell(0);
    let author = row.insertCell(1);
    let title = row.insertCell(2);
    let year = row.insertCell(3);
    let pages = row.insertCell(4);
    let status = row.insertCell(5);

    ID.innerHTML = i;
    author.innerHTML = myLibrary[i].author;
    title.innerHTML = myLibrary[i].title;
    year.innerHTML = myLibrary[i].year;
    pages.innerHTML = myLibrary[i].pages;
    status.innerHTML = myLibrary[i].status;
  }
}
