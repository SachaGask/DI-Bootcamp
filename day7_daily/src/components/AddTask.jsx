import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/plannerSlice';

export default function AddTask({ day }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask({ day, text }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
    </form>
  );
}
