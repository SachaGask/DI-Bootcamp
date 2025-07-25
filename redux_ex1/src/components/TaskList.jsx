import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>{task.text}</span>
          <button onClick={() => onDelete(task.id)} style={{ marginLeft: 8 }}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleTask(id)),
  onDelete: id => dispatch(deleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
