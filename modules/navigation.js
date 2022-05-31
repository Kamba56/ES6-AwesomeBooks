import {
  bookListSection, formSection, contactSection, formLink, bookLink, contactLink,
} from './elements.js';
import isEmpty from './emptyList.js';

const navFunction = () => {
  bookLink.addEventListener('click', (e) => {
    e.preventDefault();
    bookListSection.style.display = 'block';
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
    isEmpty();
    bookLink.classList.add('active');
    formLink.classList.remove('active');
    contactLink.classList.remove('active');
  });

  formLink.addEventListener('click', (e) => {
    e.preventDefault();
    bookListSection.style.display = 'none';
    formSection.style.display = 'block';
    contactSection.style.display = 'none';
    formLink.classList.add('active');
    bookLink.classList.remove('active');
    contactLink.classList.remove('active');
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    bookListSection.style.display = 'none';
    formSection.style.display = 'none';
    contactSection.style.display = 'block';
    contactLink.classList.add('active');
    formLink.classList.remove('active');
    bookLink.classList.remove('active');
  });
};

export default navFunction;