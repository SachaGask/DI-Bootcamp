import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from './actionTypes';

// Ajoute une tâche pour un jour donné
export const addTask = (day, text) => ({
  type: ADD_TASK,
  payload: { day, text }
});

// Modifie une tâche pour un jour donné
export const editTask = (day, id, newText) => ({
  type: EDIT_TASK,
  payload: { day, id, newText }
});

// Supprime une tâche pour un jour donné
export const deleteTask = (day, id) => ({
  type: DELETE_TASK,
  payload: { day, id }
});

// Sélectionne un jour
export const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: { day }
});
