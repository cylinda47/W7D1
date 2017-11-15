import React from 'react';
import ErrorList from './error_list'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', done: 'false' };
    this.createTodo = this.props.createTodo.bind(this);
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
    // const id = new Date().getTime();
    // this.setState({ id });
    const todo = Object.assign({}, this.state);
    this.createTodo({todo}).then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <label>Title : </label>
        <input id="title" type="text" onChange={this.updateInput} placeholder="walk to store" value={this.state.title}></input>
        <br />
        <label>Description : </label>
        <textarea id="body" type="text" onChange={this.updateInput} placeholder="walk to store" value={this.state.body}></textarea>
        <br />
        <input type="submit" value="Create Step!" />
        <ErrorList errors={ this.props.errors }/>
      </form>
    );
  }
}

export default TodoForm;
