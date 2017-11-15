import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.deleteTodo);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render(){
    const {todos, receiveTodo, removeTodo, createTodo, updateTodo, deleteTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => (<TodoListItem deleteTodo={deleteTodo} receiveTodo={receiveTodo} updateTodo={updateTodo} todo={todo} key={todo.id}/>))}
        </ul>
        <TodoForm receiveTodo={receiveTodo} createTodo={createTodo} errors={this.props.errors} />
      </div>
    );
  }
}

export default TodoList;
