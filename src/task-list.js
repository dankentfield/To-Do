import React, { Component } from 'react';
import Task from './Task';

import './App.css';

export class TaskList extends Component {
  render() {
    return (
      <div className="App">
        <Task />
        <h1>Hi</h1>
      </div>
    );
  }
}

export default TaskList;
