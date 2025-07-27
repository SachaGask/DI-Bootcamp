import React from 'react';

export default function Calendar({ selectedDay, onChange }) {
  return (
    <input
      type="date"
      value={selectedDay}
      onChange={e => onChange(e.target.value)}
      style={{ marginBottom: 16 }}
    />
  );
}
