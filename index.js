import navFunction from './modules/navigation.js';
import BooksTemplate from './modules/books.js';
import { form, bookSection } from './modules/elements.js';
import isEmpty from './modules/emptyList.js';
import generateBooks from './modules/dynamicList.js';

// Nav functionality
navFunction();
const bookObj = new BooksTemplate();

// check if booklist is empty and show message if true
isEmpty();

// Add book to list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.title.value && form.author.value) {
    bookObj.addBook();
    form.reset();
  }
});

// Remove button functionality
bookSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const removedBotton = e.target;
    bookObj.removeBook(removedBotton);
    isEmpty();
  }
});

// Display books directly from localstorage if any
bookObj.books.forEach(generateBooks);