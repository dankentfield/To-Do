import React, { Component } from 'react';

import './App.css';

export class Header extends Component {
    constructor(props){
        super(props);
    
        this.taskInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e){
        //This stops the page refreshing when onClick is called inside a form. 
        e.preventDefault(); 
        //taskVal is a variable object containing the value of the input field and a unique key generated form the date and time.
        const taskVal = {text: this.taskInput.current.value, key: Date.now()}
        //This passes the taskVal variable (containing input object) taskVal into the function passed as a prop 'addTask'
        this.props.addTask(taskVal);
    }

  render() {
    return (
      <div className="App-header">
      <h1>Type your task below:</h1>
        <form>
            <input  ref={this.taskInput} placeholder='Add your note here...'/>
            <button onClick={this.handleSubmit}>submit</button> 
        </form>
      </div>
    );
  }
}

export default Header;
