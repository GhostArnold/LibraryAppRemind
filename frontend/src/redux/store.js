import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
// Создаём хранили и помещаем туда reducer
const store = configureStore({
  reducer: booksReducer,
});

export default store;
