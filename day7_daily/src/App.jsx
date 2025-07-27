
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { setTasks } from './redux/plannerSlice';


function AppContent() {
  const [selectedDay, setSelectedDay] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  });

  // Persistance localeStorage
  useEffect(() => {
    const saved = localStorage.getItem('planner_days');
    if (saved) {
      store.dispatch(setTasks(JSON.parse(saved)));
    }
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem('planner_days', JSON.stringify(state.planner.days));
    });
    return unsubscribe;
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Daily Planner</h2>
      <input
        type="date"
        value={selectedDay}
        onChange={e => setSelectedDay(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <AddTask day={selectedDay} />
      <TaskList day={selectedDay} />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
