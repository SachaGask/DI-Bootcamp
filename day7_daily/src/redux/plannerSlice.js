import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  days: {}, // { '2025-07-27': [{ id, text, done }], ... }
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, text } = action.payload;
      if (!state.days[day]) state.days[day] = [];
      state.days[day].push({
        id: Date.now() + Math.random(),
        text,
        done: false,
      });
    },
    toggleTask: (state, action) => {
      const { day, id } = action.payload;
      const task = state.days[day]?.find(t => t.id === id);
      if (task) task.done = !task.done;
    },
    removeTask: (state, action) => {
      const { day, id } = action.payload;
      if (state.days[day]) {
        state.days[day] = state.days[day].filter(t => t.id !== id);
      }
    },
    editTask: (state, action) => {
      const { day, id, text } = action.payload;
      const task = state.days[day]?.find(t => t.id === id);
      if (task) task.text = text;
    },
    setTasks: (state, action) => {
      state.days = action.payload;
    },
  },
});

export const { addTask, toggleTask, removeTask, editTask, setTasks } = plannerSlice.actions;
export default plannerSlice.reducer;
