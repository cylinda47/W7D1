import React from 'react';

class TodoForm extends React.Component {
  constructor({ receiveTodo }) {
    super();
    this.state = { title: '', description: '', id: new Date().getTime(), done: 'Undo' };
    this.receiveTodo = receiveTodo.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

  updateInput(event) {
    const data = event.currentTarget.value;
    const key = event.currentTarget.id;
    this.setState({ [key]: data });
  }

  submitItem(event) {
    event.preventDefault();
    const id = new Date().getTime();
    this.setState({ id });
    this.receiveTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <label>Title : </label>
        <input id="title" type="text" onChange={this.updateInput} placeholder="walk to store"></input>
        <br />
        <label>Description : </label>
        <input id="description" type="text" onChange={this.updateInput} placeholder="walk to store"></input>
        <br />
        <input type="submit" value="Create Step!" />
      </form>
    );
  }
}

export default TodoForm;
