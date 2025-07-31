import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer // ici, "todos" devient la clé dans ton state global
  }
});

export default store;
