import React, { Component } from 'react';
import './style.css';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar() {
    const { contador } = this.state;
    this.setState({ contador: contador + 1 });
  }

  render() {
    const { contador } = this.state;
    return (
      <div>
        <p>Cuenta: {contador}</p>
        <button onClick={() => this.aumentar()}>Aumentar</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Contador />
      </div>
    );
  }
}
