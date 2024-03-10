
import { configureStore } from '@reduxjs/toolkit';
import todoMovie from './counterSlice';
const store = configureStore({
  reducer: {
    Movie: todoMovie
  },
})

export default store;