import React from 'react';

class App extends React.Component {
  state = {
    text: '',
    todos: []
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let cloneTodo = [...this.state.todos];
    cloneTodo.push(this.state.text);
    this.setState({ text: '', todos: cloneTodo });
  };

  render() {
    return (
      <div>
        <h1>Hi, There</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add</button>
        </form>
        {this.state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    );
  }
}

export default App;
