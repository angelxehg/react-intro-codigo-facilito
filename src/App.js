import React, { Component } from 'react';
import './style.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      ]
    };
  }
  async componentDidMount() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await respuesta.json();
    this.setState({ articulos: datos });
  }
  render() {
    const { articulos } = this.state;
    return (
      <section>
        <h1>Artículos</h1>
        {articulos.map(articulo => (
          <article>
            <h2>{articulo.title}</h2>
            <p>{articulo.body}</p>
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
