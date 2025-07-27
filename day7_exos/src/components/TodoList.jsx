import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  if (!todos.length) return <div>Aucune tâche.</div>;
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
