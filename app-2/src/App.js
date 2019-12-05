import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      myArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }
  render() {
    let mappedArray = this.state.myArray.map((el, i) => {
      return (
        <li key={i}>{el}</li>
      );
    })
    return (
      <div className="App">
        {mappedArray}

      </div>
    );
  }
}

export default App;
