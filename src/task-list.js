import React, { Component } from 'react';
import Task from './Task';

import './App.css';

export class TaskList extends Component {
  render() {
    return (
      <div className="App">
        <Task />
      </div>
    );
  }
}

export default TaskList;
