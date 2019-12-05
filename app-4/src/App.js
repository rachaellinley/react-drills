import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      username: "",
      password: ""
    }
  }

  handleUsername = value => {
    console.log(value);
    this.setState({
      username: value
    });
  };

  handlePassword = value => {
    console.log(value);
    this.setState({
      password: value
    });
  };

  handleLogin = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <input onChange= {e => this.handleUsername(e.target.value)} ></input>
        <input onChange= {e => this.handlePassword(e.target.value)}></input>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
