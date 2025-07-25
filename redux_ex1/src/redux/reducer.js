import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actionTypes';

const initialState = {
  tasks: []
};

let nextId = 1;

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: nextId++, text: action.payload.text, completed: false }
        ]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
}
