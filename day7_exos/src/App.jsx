import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
        <h1>Ma Todo Redux Toolkit</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
