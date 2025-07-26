import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from './actionTypes';

const initialState = {
  days: {}, // { '2025-07-26': [ {id, text}, ... ] }
  selectedDay: null
};

let nextId = 1;

export default function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return { ...state, selectedDay: action.payload.day };
    case ADD_TASK: {
      const { day, text } = action.payload;
      const tasks = state.days[day] || [];
      return {
        ...state,
        days: {
          ...state.days,
          [day]: [...tasks, { id: nextId++, text }]
        }
      };
    }
    case EDIT_TASK: {
      const { day, id, newText } = action.payload;
      return {
        ...state,
        days: {
          ...state.days,
          [day]: state.days[day].map(task =>
            task.id === id ? { ...task, text: newText } : task
          )
        }
      };
    }
    case DELETE_TASK: {
      const { day, id } = action.payload;
      return {
        ...state,
        days: {
          ...state.days,
          [day]: state.days[day].filter(task => task.id !== id)
        }
      };
    }
    default:
      return state;
  }
}
