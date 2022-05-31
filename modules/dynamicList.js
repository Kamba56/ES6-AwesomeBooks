import { bookSection } from './elements.js';

const generateBooks = ({ author, title, id }) => {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book-div');
  bookContainer.innerHTML = `
  <p>"${title}" by ${author}</p>
  <button id="${id}" class="remove-button" type="button")">Remove</button>  
  `;
  bookSection.appendChild(bookContainer);
};

export default generateBooks;