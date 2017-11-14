import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {todos, receiveTodo, removeTodo} = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => (<TodoListItem removeTodo={removeTodo} receiveTodo={receiveTodo} todo={todo} key={todo.id}/>))}
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
