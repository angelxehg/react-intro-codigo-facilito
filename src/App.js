import React, { Component } from 'react';
import './style.css';

function Componente() {
  return <p>Componente funcional</p>;
}

class ComponenteClase extends Component {
  render() {
    return <p>Componente de clase</p>;
  }
}

export default function App() {
  return (
    <div>
      <Componente />
      <ComponenteClase />
    </div>
  );
}
