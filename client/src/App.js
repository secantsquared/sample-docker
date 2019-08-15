import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    todos: [],
    name: '',
    email: '',
    id: 0
  };

  componentDidMount() {
    axios
      .get('http://localhost:9000')
      .then(response => this.setState({ specialMessage: response.data }))
      .catch(err => console.error(err));
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, email, todos } = this.state;
    console.log(this.state);
    e.preventDefault();
    this.setState(prevState => {
      return {
        todos: [...todos, { name, email, id: prevState.id++ }],
        name: '',
        email: ''
      };
    }, console.log('updated'));
  };

  render() {
    const { name, email, todos, specialMessage } = this.state;
    return (
      <div>
        <h2>OMFG IT WORKS</h2>
        <h3>{specialMessage}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <hr />
        <div>
          {todos.map(todo => {
            return (
              <div key={todo.id}>
                <p>{todo.name}</p>
                <p>{todo.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
