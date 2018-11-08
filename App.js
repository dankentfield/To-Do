import React, { Component } from 'react';
import TaskList from './task-list';
import Header from './header';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      task:'',
      arrtaskList: []
  }

    this.addNewTask = this.addNewTask.bind(this);
    this.delete = this.delete.bind(this);
  }

   //function to add the task on an array in state
  addNewTask(newTask) {
    //Create new temp copy of arrTaskList array 
    const arrtaskListNew = this.state.arrtaskList.slice();
    //add the input field value to the end of the temp array
    arrtaskListNew.push(newTask);
    //update the tasklist array in state to the value of the temp array (added in the new task)
    this.setState({arrtaskList: arrtaskListNew});
    this.setState({inputVal:''});
  }

  //This creates a new array (maintaining state immutability) from the state array arrTaskList minus the item.key that is passed in as arg.
  delete(key) {
  const deleteItem = this.state.arrtaskList.filter(function (item) {
    return (item.key !== key)
    
  });
  //State is then reset with the new array.
  this.setState({
    arrtaskList: deleteItem
  });    
}

  
    

  render() {
    return (
      <div className="App">
        <Header addTask={this.addNewTask}/>
        {/* Passing the arrTaskList state as props to the TaskList component so it can access the state. */} 
        <TaskList task={this.state.arrtaskList} deleteItemGrandparent={this.delete}/>
        
      </div>
    );
  }
}

export default App;
