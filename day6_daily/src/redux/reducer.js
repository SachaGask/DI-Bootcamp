
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from './actionTypes';


// Persistance locale : récupération de l'état sauvegardé
function loadState() {
  try {
    const serializedState = localStorage.getItem('plannerState');
    if (serializedState === null) {
      return {
        days: {},
        selectedDay: null
      };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return {
      days: {},
      selectedDay: null
    };
  }
}

function saveState(state) {
  try {
    localStorage.setItem('plannerState', JSON.stringify(state));
  } catch (e) {}
}

const initialState = loadState();

export default function plannerReducer(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case SELECT_DAY:
      nextState = { ...state, selectedDay: action.payload.day };
      break;
    case ADD_TASK: {
      const { day, text } = action.payload;
      if (!text || !text.trim()) return state; // validation
      const tasks = state.days[day] || [];
      nextState = {
        ...state,
        days: {
          ...state.days,
          [day]: [...tasks, { id: uuidv4(), text: text.trim() }]
        }
      };
      break;
    }
    case EDIT_TASK: {
      const { day, id, newText } = action.payload;
      if (!newText || !newText.trim() || !state.days[day]) return state;
      nextState = {
        ...state,
        days: {
          ...state.days,
          [day]: (state.days[day] || []).map(task =>
            task.id === id ? { ...task, text: newText.trim() } : task
          )
        }
      };
      break;
    }
    case DELETE_TASK: {
      const { day, id } = action.payload;
      if (!state.days[day]) return state;
      const newTasks = (state.days[day] || []).filter(task => String(task.id) !== String(id));
      // Si aucune tâche n'a été supprimée, ne rien changer
      if (newTasks.length === state.days[day].length) return state;
      nextState = {
        ...state,
        days: {
          ...state.days,
          [day]: newTasks
        }
      };
      break;
    }
    default:
      nextState = state;
  }
  // Persistance locale à chaque modification
  if (nextState !== state) saveState(nextState);
  return nextState;
}
