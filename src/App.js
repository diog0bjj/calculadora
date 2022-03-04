import React, { Component } from 'react'
import './App.css'

class App extends Component {
  
  state={
    number1:Number(null),
    number2:Number(null),
    Result:Number(null),
  };

  plus = () =>{
    this.setState({ Result: this.state.number1 + this.state.number2 })
  };

  minus = () =>{
    this.setState({ Result: this.state.number1 - this.state.number2 })
  };

  times= () =>{
    this.setState({ Result: this.state.number1 * this.state.number2 })
  };

  div = () =>{
    this.setState({ Result: this.state.number1 / this.state.number2 })
  };
  
  clear = () =>{
    this.setState({ number1:null, number2:null, Result:null })
  };

  handleChangen1 = (event) =>{
    this.setState({ number1: Number(event.target.value) })
  };

  handleChangen2 = (event) =>{
    this.setState({ number2: Number(event.target.value) })
  };

  render(){
    return(
      <div className="container">
        <div className="elements">
          <input onChange={this.handleChangen1} type="number" placeholder='digite um numero aqui'></input>
          <input onChange={this.handleChangen2} type="number" placeholder='digite um numero aqui'></input>
        </div>
        <div className="simbols">
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
          <button onClick={this.times}>*</button>
          <button onClick={this.div}>/</button>
          <button onClick={this.clear}>Clear</button>
        </div>
        <div>
          <h2>Resultado:{this.state.Result}</h2>
        </div>
      </div>
    )
  }
}

export default App


