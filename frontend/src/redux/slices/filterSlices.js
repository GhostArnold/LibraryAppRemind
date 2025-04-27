import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  // Префикс action
  name: 'filter',
  // Начальный массив
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // Либо стандартным способом
      // return { ...state, title: action.payload };
      // Либо с помощью библиотеки immer
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilter: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilter, setAuthorFilter } =
  filterSlice.actions;
// Create selector
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export default filterSlice.reducer;
