import { emptyList } from './elements.js';
import BooksTemplate from './books.js';

const bookObj = new BooksTemplate();
const isEmpty = () => {
  if (bookObj.books.length === 0) {
    emptyList.style.display = 'block';
  } else {
    emptyList.style.display = 'none';
  }
};

export default isEmpty;