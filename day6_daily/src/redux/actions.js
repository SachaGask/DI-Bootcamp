import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from './actionTypes';

export const addTask = (day, text) => ({
  type: ADD_TASK,
  payload: { day, text }
});

export const editTask = (day, id, newText) => ({
  type: EDIT_TASK,
  payload: { day, id, newText }
});

export const deleteTask = (day, id) => ({
  type: DELETE_TASK,
  payload: { day, id }
});

export const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: { day }
});
