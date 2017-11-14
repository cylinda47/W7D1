import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';


const _defaultState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_TODOS:
      const newState = merge({}, state);
      action.todos.forEach( el => (newState[el.id] = el));
      return newState;
    case RECEIVE_TODO:
      const newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      const rTodo = merge({}, state);
      delete rTodo[action.todo.id];
      return rTodo;
    default:
      return state;
  }

};

export default todosReducer;
