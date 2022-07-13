import React, { Component } from "react";
import logo from "./logo.svg";
import "./Counter.css";

export class Counter extends Component {
  //funcion especial para inicializar nuestro objeto que es un componente de react
  constructor(){
    super()
    this.state={
      contador:0,
      limiteInferior:0,
      limiteSuperior:12
    }
    this.aumentarContador = this.aumentarContador.bind(this)
    this.restarContador = this.restarContador.bind(this)
    //this.resetContador = this.resetContador.bind(this) no la usamos porque usamos una "arrow fuction"
  }
  // esta sintaxis es porque estamos usando "class extend component" mas adelante ya no las necesitaremos cuando utilisemos "fuctional component"
  aumentarContador(){
    if(this.state.contador < this.state.limiteSuperior)
    this.setState({ contador : this.state.contador + 1})
  }

  restarContador(){
    if(this.state.contador > this.state.limiteInferior)
    this.setState({ contador : this.state.contador - 1})
  }

  resetState(){
    this.setState({ contador : 0})    
  }

  establecerLimiteSuperior(nuevoLimite){// argumento.. que no se te olvide
    this.setState({ limiteSuperior:nuevoLimite })
  }

  establecerLimiteInferiro(nuevoLimite){
    this.setState({ limiteInferior:nuevoLimite })
  }

  render() {
    //let valor= 5
    return (
      <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            aplicacion de Contador
          </p>
          <p>
            { this.state.contador }
          </p>
          <p>
            {JSON.stringify(this.state)}
          </p>{/* esto es para imprimir el estado */}
          
          {/* button mas */}
          <button onClick={ this.aumentarContador }>Mas</button>
          <label>Limite Superior</label>
          <input onChange={ (e) => this.establecerLimiteSuperior(e.target.value) } placeholder="limite Superior"/>
          
          {/* button menos */}
          <button onClick={ this.restarContador }>Menos</button>
          <label>Limite Inferior</label>
          <input onChange={ (e) => this.establecerLimiteInferiro(e.target.value) } placeholder="limite Inferior"/>
                    
          
          <button onClick={ () => this.resetState() }>Reset</button>
      </div>
    );
  }
}
