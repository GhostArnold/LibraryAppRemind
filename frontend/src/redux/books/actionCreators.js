import * as a from './actionTypes.js';

// Через эту функцию добавляем объект в payload
export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};
