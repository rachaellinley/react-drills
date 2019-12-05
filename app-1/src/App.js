import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor (){
    super();

    this.state = {
     message: ""
    }
  }

  handleInput = value => {
    console.log(value);
    this.setState({
      message: value
    });
  };

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleInput(e.target.value)}></input>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;