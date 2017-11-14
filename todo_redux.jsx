import React from 'react';
import ReactDOM from 'react-dom';
import store from './frontend/store/store';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_actions';
import Root from './frontend/components/root';
import allTodos from './frontend/reducers/selectors';

document.addEventListener('DOMContentLoaded', (e) => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;
window.removeTodo = removeTodo;
