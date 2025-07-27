import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../redux/actions';

function TaskList({ tasks, selectedDay, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setError('');
  };

  const handleEdit = (id) => {
    if (!editText.trim()) {
      setError('La tâche ne peut pas être vide.');
      return;
    }
    onEdit(id, editText);
    setEditingId(null);
    setEditText('');
    setError('');
  };

  if (!tasks || tasks.length === 0) return <div>Aucune tâche pour ce jour.</div>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <button onClick={() => handleEdit(task.id)}>Valider</button>
              <button onClick={() => setEditingId(null)}>Annuler</button>
              {error && <span style={{ color: 'red', marginLeft: 8 }}>{error}</span>}
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => startEdit(task)} style={{ marginLeft: 8 }}>
Éditer</button>
              <button
                onClick={() => {
                  if (window.confirm('Supprimer cette tâche ?')) onDelete(task.id);
                }}
                style={{ marginLeft: 8 }}
              >
                Supprimer
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  tasks: state.selectedDay ? state.days[state.selectedDay] : [],
  selectedDay: state.selectedDay
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEdit: (id, newText) => {
    if (!ownProps.selectedDay) return;
    dispatch(editTask(ownProps.selectedDay, id, newText));
  },
  onDelete: id => {
    if (!ownProps.selectedDay) return;
    // S'assurer que l'id est bien transmis en string pour correspondre au reducer
    dispatch(deleteTask(ownProps.selectedDay, String(id)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
