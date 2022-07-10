import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export class App extends Component {
  //funcion especial para inicializar nuestro objeto que es un componente de react
  constructor(){
    super()
    this.state={
      contador:0
    }
    this.aumentarContador = this.aumentarContador.bind(this)
    this.restarContador = this.restarContador.bind(this)
    //this.resetContador = this.resetContador.bind(this) no la usamos porque usamos una "arrow fuction"
  }
  // esta sintaxis es porque estamos usando "class extend component" mas adelante ya no las necesitaremos cuando utilisemos "fuctional component"
  aumentarContador(){
    if(this.state.contador < 15)
    this.setState({ contador : this.state.contador + 1})
  }

  restarContador(){
    if(this.state.contador > 0)
    this.setState({ contador : this.state.contador - 1})
  }
  resetState(){
    this.setState({ contador : 0})
  }

  render() {
    //let valor= 5
    return (
      <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>aplicacion de Contador</p>
          <p>
            { this.state.contador }
          </p>
          <button onClick={ this.aumentarContador }>Up</button>
          <button onClick={ this.restarContador }>Down</button>
          <button onClick={ () => this.resetState() }>Reset</button>
      </div>
    );
  }
}
