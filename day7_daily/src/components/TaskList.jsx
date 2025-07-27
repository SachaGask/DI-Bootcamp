import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, removeTask, editTask } from '../redux/plannerSlice';

export default function TaskList({ day }) {
  const tasks = useSelector(state => state.planner.days[day] || []);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTask({ day, id, text: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {editId === task.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <button onClick={() => handleEdit(task.id)}>Valider</button>
              <button onClick={() => setEditId(null)}>Annuler</button>
            </>
          ) : (
            <>
              <span onClick={() => dispatch(toggleTask({ day, id: task.id }))} style={{ cursor: 'pointer' }}>{task.text}</span>
              <button onClick={() => startEdit(task.id, task.text)}>Éditer</button>
              <button onClick={() => dispatch(removeTask({ day, id: task.id }))}>Supprimer</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
