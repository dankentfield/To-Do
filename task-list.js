import React, { Component } from 'react';
import Task from './Task';
import './App.css';

export class TaskList extends Component {

  constructor(props){
    super(props);
    
    this.deleteItemParent = this.deleteItemParent.bind(this);
    
  }

  deleteItemParent(key) {
    this.props.deleteItemGrandparent(key);
  }

  render() {
    
    return (
      <div className='tasklist'>
        
          {/* Passing down the state (through props) from App to task so it can access the state of the arrTaskList array. */} 
          <ul>
            <Task tasks={this.props.task} deleteItem={this.deleteItemParent} />
          </ul>
        
      </div>
    );
  }
}

export default TaskList;
