import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import filterReducer from '../redux/slices/filterSlices';
// Создаём хранили и помещаем туда reducer
const store = configureStore({
  // Здесь будем запимывать редьюсеры наши
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;
