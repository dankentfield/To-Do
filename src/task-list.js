import React, { Component } from 'react';
import Task from './task';
import List from '@material-ui/core/List';

import './App.css';

export class TaskList extends Component {

  

  render() {
    
    return (
      <div className="App">
        <ul> 
          {/* Passing down the state (through props) from App to task so it can access the state of the arrTaskList array. */} 
          <List>
            <Task tasks={this.props.task}/>
          </List>
        </ul>
      </div>
    );
  }
}

export default TaskList;
