import React, { Component } from 'react';
import './style.css';

function A(props) {
  return (
    <div>
      <h1>Hola {props.name}</h1>
      {props.children}
    </div>
  );
}

function B(props) {
  return <p>{props.name}: 10</p>;
}

function Componente() {
  return <p>Componente funcional</p>;
}

class ComponenteClase extends Component {
  render() {
    return <p>Componente de clase</p>;
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'Angel'
    };
  }
  render() {
    const nombre = 'Angel';
    return (
      <div>
        <A name={nombre}>
          <B name={nombre} />
        </A>
        <Componente />
        <ComponenteClase />
      </div>
    );
  }
}
