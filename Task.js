import React, { Component } from 'react';
import './App.css';

export class Task extends Component {

  constructor(props){
    super(props);
    
    this.delete = this.delete.bind(this);
    this.createTasks = this.createTasks.bind(this);

  }

  //This function is passed into .map in the render method below. It takes item as an argument which contains the array arrTaskList.
  createTasks(item) {
    //This takes the values from the passed in array and outputs a list element with key and text attributes.
    return <li className='item' key={item.key}
                onClick={() => this.delete(item.key)} >
            {item.text}
          </li>
    
  }

  delete(key) {
    this.props.deleteItem(key);
  }

  render() {
    //taskArr is a copy of the arrTaskList array in App.js state
    let taskArr = this.props.tasks;
    //This runs createTasks against each element of the arrTaskList array in state. 
    let taskList = taskArr.map(this.createTasks); 

    return (
      
        <div>
          <ul> 
          {/* This will render all of the items in the arrItemList array - displaying all of the tasks */}
          {taskList}
          </ul>
        </div>
    );
  }
}

export default Task;
