const myLibrary = [];
let bookCard = document.querySelector('.book');
let bookContainer = document.querySelector('.book-container');
let btn = document.querySelector('#add-book-button');
let formDiv = document.querySelector('.form-popup');
let submitBtn = document.querySelector('.submit-btn');
let form = document.querySelector('.form-container');

//Book handled by constructor
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.read = read;
  this.displayString =
    name + ', by ' + author + '. ' + pages + ' pages' + '. ' + read;
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
  printBook(newBook);
}

function printBook(book) {
  let div = document.createElement('div');
  let removeBtn = document.createElement('button');
  let readBtn = document.createElement('button');
  div.classList.add('book');
  let nameDiv = document.createElement('div');
  nameDiv.textContent = "Name: " + book.name;
  div.appendChild(nameDiv);
  let authorDiv = document.createElement('div');
  authorDiv.textContent = "Author: " + book.author;
  div.appendChild(authorDiv);
  let pagesDiv = document.createElement('div');
  pagesDiv.textContent = "Pages: " + book.pages;
  div.appendChild(pagesDiv);
  let readDiv = document.createElement('div');
  readDiv.textContent = book.read;
  div.appendChild(readDiv);

//   div.dataset.id = book.id;
//   book.displayString =
//     book.name +
//     ', by ' +
//     book.author +
//     '. ' +
//     book.pages +
//     ' pages' +
//     '. ' +
//     book.read;
//   div.textContent = book.displayString;
  removeBtn.textContent = 'remove';

  if (book.read == 'read') {
    readBtn.textContent = 'Mark Unread';
  } else {
    readBtn.textContent = 'Mark Read';
  }

  removeBtn.addEventListener('click', () => {
    removeDiv(div);
  });
  readBtn.addEventListener('click', () => {
    changeReadStatus(book, readDiv, readBtn);
  });
  div.appendChild(removeBtn);
  div.appendChild(readBtn);
  bookContainer.appendChild(div);
}
function removeDiv(div) {
  id = div.dataset.id;
  bookContainer.removeChild(div);
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == div.dataset.id) {
      myLibrary.splice(i, 1);
      console.log(myLibrary);
    }
  }
}
btn.addEventListener('click', () => {
  formDiv.style.display = 'block';
});

submitBtn.addEventListener('click', (e) => {
  let author = document.querySelector('#author').value;
  let name = document.querySelector('#name').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('input[name=read]:checked').value;
  addBookToLibrary(name, author, pages, read);
  formDiv.style.display = 'none';
  author = document.querySelector('#author').value = '';
  name = document.querySelector('#name').value = '';
  pages = document.querySelector('#pages').value = '';
  read = document.querySelector('input[name=read]:checked').value = '';
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
addBookToLibrary("The Old Man and the Sea", "Ernest Hemingway", 500, "read");
addBookToLibrary("Of Mice and Men", "John Steinbeck", 200, "read");
addBookToLibrary("The Hitchhikers Guide to the Galaxy", "Douglas Adams", 300, "unread");
console.log(myLibrary);

function changeReadStatus(book, readDiv, readBtn) {
  if (book.read == 'read') {
    book.read = 'unread';
    readBtn.textContent="Mark Read"
  } else {
    book.read = 'read';
    readBtn.textContent='Mark Unread'
  }
  //document.querySelector("div").textContent = book.displayString;
  readDiv.textContent=book.read;
//   printBook(book);
}
