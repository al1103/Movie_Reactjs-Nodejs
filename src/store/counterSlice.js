import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  todos: [], // Array to store todos (assuming you have todo functionality)
  token: localStorage.getItem("token") || null,
  user: localStorage.getItem("user") || null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload); // Add a new todo to the array
    },
    removeTodo(state, action) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    updateTodo(state, action) {
      const { id, title, description } = action.payload;
      const existingTodoIndex = state.todos.findIndex((todo) => todo.id === id);

      if (existingTodoIndex !== -1) {
        state.todos[existingTodoIndex] = {
          ...state.todos[existingTodoIndex],
          title,
          description,
        };
      }
    },
    setInfoUser(state, action) {
      state.token = action.payload.token;
      axios.defaults.headers.common["Authorization"] = action.payload
        ? `Bearer ${action.payload.token}`
        : null; // Update Axios headers based on token
      localStorage.setItem("user", JSON.stringify(action.payload.data));
      localStorage.setItem("token", action.payload.token);
      // Persist token in localStorage
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export default todoSlice.reducer;