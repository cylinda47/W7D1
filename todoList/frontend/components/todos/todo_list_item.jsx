import React from 'react';

const TodoListItem = ({ deleteTodo, todo, receiveTodo, updateTodo }) => {
  const status = () => (todo.done === false ? true : false);

  const deleteItem = (event) => {
    deleteTodo(todo);
  };

  const statusFlipped = (e) => {
    todo.done = status();
    e.preventDefault();
    updateTodo(todo);
  };

  return(
    <li>
      {todo.title}
      <button onClick={deleteItem}>Delete</button>
      <button onClick={statusFlipped}>{status() ? 'Done' : 'Undo'}</button>
    </li>
  );
};

export default TodoListItem;
