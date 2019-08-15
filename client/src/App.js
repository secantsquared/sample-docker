import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    todos: [],
    name: '',
    email: ''
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    return axios
      .get('http://localhost:9000')
      .then(response => this.setState({ todos: response.data }))
      .catch(err => console.error(err));
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, email } = this.state;
    e.preventDefault();
    axios
      .post('http://localhost:9000', { name, email })
      .then(() => this.fetchData())
      .then(() => this.setState({ name: '', email: '' }))
      .catch(err => console.error(err));
  };

  render() {
    const { name, email, todos } = this.state;
    return (
      <div>
        <h2>OMFG IT WORKS!!BABBABOOEY</h2>
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
