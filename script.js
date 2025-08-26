const myLibrary = [];
let bookCard = document.querySelector('.book');
let bookContainer = document.querySelector('.book-container');
let btn = document.querySelector('#add-book-button');
let formDiv = document.querySelector('.form-popup');
let submitBtn = document.querySelector('.submit-btn');
let form = document.querySelector('.form-container');

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
  let btn = document.createElement('button');
  let readBtn = document.createElement('button');
  div.dataset.id = book.id;
  book.displayString = book.name + ', by ' + book.author + '. ' + book.pages + ' pages' + '. ' + book.read;
  div.textContent = book.displayString;
  btn.textContent = 'remove';

  if(book.read == "read"){
    readBtn.textContent = "Mark Unread"
  }else{
    readBtn.textContent = "Mark Read"
  }

  btn.addEventListener('click', () => {
    removeDiv(div);
  });
  readBtn.addEventListener("click", ()=> {
    changeReadStatus(book, div);
  })
  div.appendChild(btn);
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

console.log(myLibrary);

function changeReadStatus(book, div){
    if(book.read == "read"){
        book.read = "unread";
    }else{
        book.read = "read";
    }
    //document.querySelector("div").textContent = book.displayString;
    removeDiv(div);
    printBook(book);
}