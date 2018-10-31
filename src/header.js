import React, { Component } from 'react';

import './App.css';

export class Header extends Component {
    constructor(props){
        super(props);
    
        this.taskInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e){
        e.preventDefault(); 
        //This stops the page refreshing when onClick is called inside a form. 
        const taskVal = this.taskInput.current.value;
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
