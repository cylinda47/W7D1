import React from 'react';

const TodoListItem = ({ removeTodo, todo, receiveTodo }) => {
  const status = () => (todo.done === 'Undo' ? 'Done' : 'Undo');
  const deleteItem = (event) => {
    removeTodo(todo);
  };
  const statusFlipped = (e) => {
    todo.done = status();
    receiveTodo(todo);
  };
  return(
    <li>
      {todo.title}
      <button onClick={deleteItem}>Delete</button>
      <button onClick={statusFlipped}>{status()}</button>
    </li>
  );
};

export default TodoListItem;
