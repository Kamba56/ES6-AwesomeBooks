import generateBooks from './dynamicList.js';
import { form, emptyList } from './elements.js';

export default class BooksTemplate {
  constructor() {
    this.books = [];
    if (JSON.parse(localStorage.getItem('books'))) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
    if (this.books.length === 0) {
      emptyList.style.display = 'block';
    }
  }

  // methods
  addBook() {
    const book = {
      author: form.author.value,
      title: form.title.value,
      id: Date.now(),
    };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    emptyList.style.display = 'none';
    generateBooks(book);
  }

  removeBook(removedBotton) {
    const removedBook = removedBotton.parentElement;
    this.books = this.books.filter((book) => book.id !== Number(removedBotton.id));
    localStorage.setItem('books', JSON.stringify(this.books));
    removedBook.remove();
    if (this.books.length === 0) {
      emptyList.style.display = 'block';
    }
  }
}