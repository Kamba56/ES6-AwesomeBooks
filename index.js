import navFunction from './modules/navigation.js';
import BooksTemplate from './modules/books.js';
import { form, bookSection } from './modules/elements.js';
import generateBooks from './modules/dynamicList.js';
import setDate from './modules/dateTime.js';

// Nav functionality
navFunction();
const bookObj = new BooksTemplate();

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
  }
});

// Display books directly from localstorage if any
bookObj.books.forEach(generateBooks);

// Date time
setDate();