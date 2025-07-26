
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DatePicker from './components/DatePicker';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: 500, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
        <h1>Daily Planner</h1>
        <DatePicker />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
