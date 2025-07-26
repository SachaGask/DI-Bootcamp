import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../redux/actions';

function TaskList({ tasks, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const handleEdit = (id) => {
    onEdit(id, editText);
    setEditingId(null);
    setEditText('');
  };

  if (!tasks) return <div>Aucune tâche pour ce jour.</div>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <button onClick={() => handleEdit(task.id)}>Valider</button>
              <button onClick={() => setEditingId(null)}>Annuler</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => startEdit(task)} style={{ marginLeft: 8 }}>Éditer</button>
              <button onClick={() => onDelete(task.id)} style={{ marginLeft: 8 }}>Supprimer</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  tasks: state.selectedDay ? state.days[state.selectedDay] : []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEdit: (id, newText) => {
    if (!ownProps.selectedDay) return;
    dispatch(editTask(ownProps.selectedDay, id, newText));
  },
  onDelete: id => {
    if (!ownProps.selectedDay) return;
    dispatch(deleteTask(ownProps.selectedDay, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
