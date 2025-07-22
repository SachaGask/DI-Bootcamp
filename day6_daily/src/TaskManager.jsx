import { createContext, useContext, useReducer, useRef, useState } from "react";

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
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <input ref={inputRef} type="text" placeholder="New Task" style={{ flex: 1, padding: '0.5rem' }} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TaskList() {
  const { state, dispatch } = useTasks();
  const [editId, setEditId] = useState(null);
  const editRef = useRef();

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
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasksToShow.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <button onClick={() => handleEdit(task.id, task.text)} style={{ order: -1 }}>
            Edit
          </button>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
          />
          {editId === task.id ? (
            <>
              <input ref={editRef} defaultValue={task.text} style={{ flex: 1, padding: '0.3rem' }} />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function TaskFilters() {
  const { state, dispatch } = useTasks();
  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "all" })}
        style={{ fontWeight: state.filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "active" })}
        style={{ fontWeight: state.filter === "active" ? "bold" : "normal" }}
      >
        Actives
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", filter: "completed" })}
        style={{ fontWeight: state.filter === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
    </div>
  );
}

export default function TaskManager() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: 600, margin: '2rem auto', background: 'rgba(255,255,255,0.8)', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px #0001' }}>
        <h2>Task Manager</h2>
        <TaskInput />
        <TaskFilters />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
