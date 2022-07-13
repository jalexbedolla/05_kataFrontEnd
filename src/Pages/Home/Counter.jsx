import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./Counter.css";
import InputValue from "../../Shared/InputValue";

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
    this.establecerLimiteInferior = this.establecerLimiteInferior.bind(this)
    this.establecerLimiteSuperior = this.establecerLimiteSuperior.bind(this)
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

  establecerLimiteInferior(nuevoLimite){
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
            
            <InputValue
                title='Limite Inferior'
                placeholder='Ingresa el limite Inferior'
                setLimit={this.establecerLimiteInferior}
            />  
            
            <InputValue
                title='limite Superior'
                placeholder='Ingresa el limite Superior'
                setLimit={this.establecerLimiteSuperior}
            />
          
            <button onClick={ this.aumentarContador }>Mas</button>
            <button onClick={ this.restarContador }>Menos</button>                
            <button onClick={ () => this.resetState() }>Reset</button>
        </div>
    );
  }
}
