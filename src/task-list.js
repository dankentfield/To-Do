import React, { Component } from 'react';
import Task from './task';

import './App.css';

export class TaskList extends Component {

  

  render() {
    
    return (
      <div className="App">
        <ul> 
          {/* Passing down the state (through props) from App to task so it can access the state of the arrTaskList array. */} 
          <Task tasks={this.props.task}/>
        </ul>
      </div>
    );
  }
}

export default TaskList;
