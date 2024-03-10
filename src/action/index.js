import { createAction } from "@reduxjs/toolkit";

export const addMovie = createAction("todos/addMovie");
export const removeMovie = createAction("todos/removeMovie");
export const updateMovie = createAction("todos/updateMovie");
export const findMovie = createAction("todos/findMovie");
export const setInfoUser = createAction("todos/setInfoUser");
export const logout = createAction("todos/logout");
