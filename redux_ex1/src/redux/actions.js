import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actionTypes';

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { text }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});
