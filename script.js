const parentContainer = document.getElementById("library-parent-container");

const myLibrary = [
  {
    title: "Sunrise Paradise",
    author: "Skinny Legged Man",
    pages: "155",
    status: "Unread",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

for (let i = 0; i < myLibrary.length; i++) {
  let newEntryCard = document.createElement("div");
  let newEntryContent = document.createElement("p");
  newEntryContent.innerText = `
  Title: ${myLibrary[i].title}
  Author: ${myLibrary[i].author}
  Length: ${myLibrary[i].pages} pages
  Status: ${myLibrary[i].status}
  `;
  newEntryCard.appendChild(newEntryContent);
  parentContainer.append(newEntryCard);
}
