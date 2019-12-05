import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child"
import kittens from "./kittens.png"

class App extends Component {
  render() {
    let img = kittens;
    return (
      <div className="App">
        <Child banana = {img}/>
      </div>
    );
  }
}

export default App;
