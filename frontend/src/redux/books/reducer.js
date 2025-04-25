import * as a from './actionTypes.js';

// Создаём начальный пустой массив
const initialState = [];

// Создаём редьюсер для книг
function booksReducer(state = initialState, action) {
  switch (action.type) {
    // Если тип ADD_BOOK
    case a.ADD_BOOK:
      // Возвращаем начальный массив по правилам реакта
      // и новый элемент
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      // По умолчанию просто возвращаем текущее состояние
      return state;
  }
}
export default booksReducer;
