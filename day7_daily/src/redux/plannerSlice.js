
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  days: {},
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, text } = action.payload;
      if (typeof text !== 'string' || !text.trim()) return;
      if (!state.days[day]) state.days[day] = [];
      state.days[day].push({
        id: uuidv4(),
        text: text.trim(),
        done: false,
      });
    },
    toggleTask: (state, action) => {
      const { day, id } = action.payload;
      if (!state.days[day]) return;
      const task = state.days[day].find(t => t.id === id);
      if (task) task.done = !task.done;
    },
    removeTask: (state, action) => {
      const { day, id } = action.payload;
      if (!state.days[day]) return;
      state.days[day] = state.days[day].filter(t => t.id !== id);
    },
    editTask: (state, action) => {
      const { day, id, text } = action.payload;
      if (!state.days[day]) return;
      if (typeof text !== 'string' || !text.trim()) return;
      const task = state.days[day].find(t => t.id === id);
      if (task) task.text = text.trim();
    },
    setTasks: (state, action) => {
      // Merge au lieu d'écraser
      state.days = { ...state.days, ...action.payload };
    },
  },
});

export const { addTask, toggleTask, removeTask, editTask, setTasks } = plannerSlice.actions;
export default plannerSlice.reducer;
