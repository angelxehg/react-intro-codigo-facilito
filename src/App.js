import React, { Component } from 'react';
import './style.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { title: 'Articulo 1' },
        { title: 'Articulo 2' },
        { title: 'Articulo 3' }
      ]
    };
  }
  render() {
    const { articulos } = this.state;
    return (
      <section>
        <h1>Artículos</h1>
        {articulos.map(articulo => (
          <article>
            <h2>{articulo.title}</h2>
          </article>
        ))}
      </section>
    );
  }
}

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="Tu email"
          type="email"
        />
        <input
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="Tu contraseña"
          type="password"
        />
        <button type="submit">Ingresar</button>
      </form>
    );
  }
}

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
        <Blog />
        <Formulario />
        <Contador />
      </div>
    );
  }
}
