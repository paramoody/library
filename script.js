const myLibrary = [];
let bookCard = document.querySelector('.book');
let bookContainer = document.querySelector('.book-container');
let btn = document.querySelector('#add-book-button');
let formDiv = document.querySelector('.form-popup');
let submitBtn = document.querySelector('.submit-btn');
let form = document.querySelector('.form-container');


class Book {
  constructor(name, author, pages, id, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;
  }
  toggleRead() {
    this.read = this.read === "read" ? "unread" : "read";
    
  }
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
  nameDiv.textContent = 'Name: ' + book.name;
  div.appendChild(nameDiv);
  let authorDiv = document.createElement('div');
  authorDiv.textContent = 'Author: ' + book.author;
  div.appendChild(authorDiv);
  let pagesDiv = document.createElement('div');
  pagesDiv.textContent = 'Pages: ' + book.pages;
  div.appendChild(pagesDiv);
  let readDiv = document.createElement('div');
  readDiv.textContent = book.read;
  div.appendChild(readDiv);


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
addBookToLibrary('The Old Man and the Sea', 'Ernest Hemingway', 500, 'read');
addBookToLibrary('Of Mice and Men', 'John Steinbeck', 200, 'read');
addBookToLibrary(
  'The Hitchhikers Guide to the Galaxy',
  'Douglas Adams',
  300,
  'unread'
);
console.log(myLibrary);

function changeReadStatus(book, readDiv, readBtn) {
  book.toggleRead();
  readBtn.textContent = book.read === "read" ? "Mark Read" : "Mark Unread";
  readDiv.textContent = book.read;
  
}
