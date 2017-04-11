import { getAllTodos, addTodo, deleteTodo } from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//This action lets our reducer know to reset the list of todos and, as such,
//will also need to pass along a new set of todos.

//todos is just for rendering purposes, when adding another todo keeps track of current todos
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => (dispatch) => {
  //if fetchTodos is called, fire ajax call
  //resulting promise can be chained with a then which takes the response and receives it
  return getAllTodos().then((response) => dispatch(receiveTodos(response)));
};

export const createTodo = (todo) => (dispatch) => {
  return addTodo(todo).then((response) => dispatch(receiveTodo(response)),  (err) => dispatch(receiveErrors(err.responseJSON))).then(() => dispatch(clearErrors()));
};

export const destroyTodo = (todo) => (dispatch) => {
  return deleteTodo(todo).then((response) => dispatch(removeTodo(response)));
};


// QUESTION: this is how we test since we have no views to call from
// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
window.fetchTodos = fetchTodos;
