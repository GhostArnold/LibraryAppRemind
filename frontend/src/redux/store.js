import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
// Создаём хранили и помещаем туда reducer
const store = configureStore({
  // Здесь будем запимывать редьюсеры наши
  reducer: {
    books: booksReducer,
  },
});

export default store;
