import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './App.css';

export class Task extends Component {

  //This function is passed into .map in the render method below. It takes item as an argument which contains the array arrTaskList.
  createTasks(item){
    //This takes the values from the passed in array and outputs a list element with key and text attributes.
    return <ListItem className="Task-list" button={true} divider={true} key={item.key}>{item.text}</ListItem>
    
  }

  render() {
    //taskArr is a copy of the arrTaskList array in App.js state
    let taskArr = this.props.tasks;
    //This runs createTasks against each element of the arrTaskList array in state. 
    let taskList = taskArr.map(this.createTasks); 

    return (
      
        <List>
        {/* This will render all of the items in the arrItemList array - displaying all of the tasks */}
        {taskList}
        </List>
      
    );
  }
}

export default Task;
