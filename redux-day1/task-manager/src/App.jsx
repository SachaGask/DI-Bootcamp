import './App.css'
import TaskList from "./TaskList";
import { useReducer, createContext, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useImmerReducer } from 'use-immer';

const initialState = {
  task: [
    {
      id: "abcd",
      name: "Task 1",
      active: true,
    }
  ],
};

const ACTION_ADD_TASK = 'ADD_TASK';
export const ACTION_REMOVE_TASK = 'REMOVE_TASK';

const tasksReducer = (state, action) => {
  if (action.type === ACTION_ADD_TASK) {
    // const newTask = [...state.task];
    // newTask.push({ id: uuidv4(), name: action.payload, active: true });
    // return { ...state, task: newTask };
    state.task.push ({ id: uuidv4(), name: action.payload, active: true });
  }
  else if (action.type === ACTION_REMOVE_TASK) {
    // const filterTask = state.task.filter(item => item.id !== action.payload);
    // return { ...state, task: filterTask };
    state.task = state.task.filter(item => item.id !== action.payload);
  }
  return state;
};

export const TaskContext = createContext();

function App() {
  const [state, dispatch] = useImmerReducer(tasksReducer, initialState);
  const inputRef = useRef();
  const addTask = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    dispatch({
      type: ACTION_ADD_TASK,
      payload: value
    });
    inputRef.current.value = '';
  };

  return (
    <>
      <h2>Task Manager</h2>
      <div>
        <input ref={inputRef} placeholder="Add a New Task" />
        <button onClick={() => addTask()}>Add Task</button>
      </div>

      <TaskContext.Provider value={{ state, dispatch }}>
        <TaskList />
      </TaskContext.Provider>
    </>
  );
}

export default App
