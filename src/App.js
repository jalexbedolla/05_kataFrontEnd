import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hola Perro..!!</p>
      </div>
    );
  }
}
