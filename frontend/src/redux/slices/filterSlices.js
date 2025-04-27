import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  // Префикс action
  name: 'filter',
  // Начальный массив
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
  },
});

export const { setTitleFilter } = filterSlice.actions;
export default filterSlice.reducer;
