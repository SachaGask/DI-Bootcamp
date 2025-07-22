import { createContext, useContext, useReducer, useRef, useState, useEffect } from "react";
import "./TaskManager.css";

const TaskContext = createContext();

const initialState = {
  tasks: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ],
  filter: "all",
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, text: action.text } : task
        ),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  return useContext(TaskContext);
}

function TaskInput() {
  const { dispatch } = useTasks();
  const inputRef = useRef();
  const handleAdd = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: "ADD_TASK", text: value });
      inputRef.current.value = "";
    }
  };
  return (
    <div className="task-input-row">
      <input ref={inputRef} type="text" placeholder="New Task" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TaskList() {
  const { state, dispatch } = useTasks();
  const [editId, setEditId] = useState(null);
  const editRef = useRef();
  // Focus input when editing
  useEffect(() => {
    if (editId !== null && editRef.current) {
      editRef.current.focus();
    }
  }, [editId]);

  let tasksToShow = state.tasks;
  if (state.filter === "completed") tasksToShow = tasksToShow.filter(t => t.completed);
  if (state.filter === "active") tasksToShow = tasksToShow.filter(t => !t.completed);

  const handleEdit = (id, text) => {
    setEditId(id);
    setTimeout(() => {
      if (editRef.current) editRef.current.value = text;
      if (editRef.current) editRef.current.focus();
    }, 0);
  };

  const handleSave = (id) => {
    const newText = editRef.current.value.trim();
    if (newText) {
      dispatch({ type: "EDIT_TASK", id, text: newText });
      setEditId(null);
    }
  };

  return (
    <ul className="task-list">
      {tasksToShow.map((task) => (
        <li key={task.id} className="task-list-item">
          <button className="edit-btn" onClick={() => handleEdit(task.id, task.text)} aria-label={`Edit task ${task.text}`}>
            Edit
          </button>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
            aria-label={`Mark ${task.text} as completed`}
          />
          {editId === task.id ? (
            <>
              <input ref={editRef} defaultValue={task.text} className="task-text" aria-label="Edit task text" />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <span className="task-text" style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function TaskFilters() {
  const { state, dispatch } = useTasks();
  return (
    <div className="task-filters">
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "all" })}
        aria-pressed={state.filter === "all"}
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "active" })}
        aria-pressed={state.filter === "active"}
      >
        Actives
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "completed" })}
        aria-pressed={state.filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default function TaskManager() {
  return (
    <TaskProvider>
      <div className="task-manager-container">
        <h2 className="task-manager-title">Task Manager</h2>
        <TaskInput />
        <TaskFilters />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
