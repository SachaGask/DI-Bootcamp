import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask({ selectedDay, onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim() || !selectedDay) return;
    onAdd(selectedDay, text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nouvelle tâche" />
      <button type="submit" disabled={!selectedDay}>Ajouter</button>
    </form>
  );
}

const mapStateToProps = state => ({
  selectedDay: state.selectedDay
});

const mapDispatchToProps = dispatch => ({
  onAdd: (day, text) => dispatch(addTask(day, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
