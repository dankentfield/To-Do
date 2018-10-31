import React, { Component } from 'react';
import Task from './task';

import './App.css';

export class TaskList extends Component {
  render() {
    return (
      <div className="App">
        <ul> 
          <Task />
        </ul>
      </div>
    );
  }
}

export default TaskList;
