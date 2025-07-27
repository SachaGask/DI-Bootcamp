import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask({ selectedDay, onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!selectedDay) {
      setError('Veuillez sélectionner un jour.');
      return;
    }
    if (!text.trim()) {
      setError('La tâche ne peut pas être vide.');
      return;
    }
    setIsSubmitting(true);
    try {
      onAdd(selectedDay, text);
      setText('');
      setSuccess('Tâche ajoutée !');
    } catch (err) {
      setError("Erreur lors de l'ajout de la tâche.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nouvelle tâche" />
      <button type="submit" disabled={!selectedDay || isSubmitting}>{isSubmitting ? 'Ajout...' : 'Ajouter'}</button>
      {error && <div style={{ color: 'red', marginTop: 4 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: 4 }}>{success}</div>}
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
