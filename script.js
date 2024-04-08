const myLibrary = [];
const addBook = document.getElementById("add-book");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("table");
const exit = document.getElementById("ekis");

function Book(title, author, numberOfPage, read) {
  this.title = title;
  this.author = author;
  this.numberOfPage = numberOfPage;
  this.read = read;
  this.info = function () {
    return `Title: ${this.title} \nAuthor: ${this.author} \nPage: ${
      this.numberOfPage
    } \n${read ? "already read" : "not read yet"}`;
  };
}

//render table in html
function renderBooks() {
  table.innerHTML = "";

  //Header in table
  const tableHeader1 = document.createElement("th");
  const tableHeader2 = document.createElement("th");
  const tableHeader3 = document.createElement("th");
  const tableHeader4 = document.createElement("th");

  tableHeader1.innerHTML = "Title";
  tableHeader2.innerHTML = "Author";
  tableHeader3.innerHTML = "Pages";
  tableHeader4.innerHTML = "Do you already read this?";

  table.appendChild(tableHeader1);
  table.appendChild(tableHeader2);
  table.appendChild(tableHeader3);
  table.appendChild(tableHeader4);

  //data we put on table
  myLibrary.forEach((book) => {
    const tableRow = document.createElement("tr");

    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");

    tableData1.innerHTML = book.title;
    tableData2.innerHTML = book.author;
    tableData3.innerHTML = book.numberOfPage;
    tableData4.innerHTML = book.read ? "Already read" : "Not read yet";

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    table.appendChild(tableRow);
  });
}

addBookToLibrary("the mocking bird", "Harpe lee", 25, false);
renderBooks();

//submit data to add book
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("page").value;
  let read = document.getElementById("read").value === "yes";

  addBookToLibrary(title, author, pages, read);

  document.getElementById("bookForm").reset();

  renderBooks();

  // Optional: You can display the newly added book in the console
  console.log("New book added:", myLibrary[myLibrary.length - 1]);
});

exit.addEventListener("click", () => {
  const form = document.querySelector("#bookForm");
  form.className = "";
});

addBook.addEventListener("click", () => {
  const form = document.querySelector("#bookForm");
  form.className = "form-style";
});

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}
