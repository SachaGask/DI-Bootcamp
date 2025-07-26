import React from 'react';
import { connect } from 'react-redux';
import { selectDay } from '../redux/actions';

function DatePicker({ selectedDay, onSelect }) {
  const today = new Date();
  const value = selectedDay || today.toISOString().slice(0, 10);

  return (
    <div style={{ marginBottom: 16 }}>
      <label>Sélectionnez un jour : </label>
      <input
        type="date"
        value={value}
        onChange={e => onSelect(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  selectedDay: state.selectedDay
});

const mapDispatchToProps = dispatch => ({
  onSelect: day => dispatch(selectDay(day))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
