import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch(addTask(text))
});

export default connect(null, mapDispatchToProps)(AddTask);
